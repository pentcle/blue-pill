import React from 'react';
import Layout from "../components/Layout";

let listOfImages =[];

class ImageLib extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/all', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (<Layout>
            <section className={"align-center"}>
                {listOfImages.map((image, index) => <img className={"sml"} key={index} src={image} alt="info"/>)}
            </section>
        </Layout>);
    }
}

export default ImageLib;