import React from 'react';
import Layout from "../components/Layout";

let listOfImages =[];

class BluePill extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/blue-pill', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (<Layout>
            <section className={"align-center"}>
                {listOfImages.map((image, index) => <img key={index} src={image} alt="info"/>)}
            </section>
        </Layout>);
    }
}

export default BluePill;