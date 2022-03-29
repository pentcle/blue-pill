import React from 'react';

let listOfImages =[];

class BluePill extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/blue-pill', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (<main>
            <section>
                {listOfImages.map((image, index) => <img key={index} src={image} alt="info"/>)}
            </section>
            <footer>
                <a href={"https://yearn.finance"} target={"_blank"}
                   rel="noopener noreferrer">yearn.finance</a>
                <a href={"https://twitter.com/iearnfinance"} target={"_blank"}
                   rel="noopener noreferrer">@iearnfinance</a>
            </footer>
        </main>);
    }
}

export default BluePill;