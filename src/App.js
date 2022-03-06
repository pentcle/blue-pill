import React from 'react';
import logo from './yearn-logo.svg';
import './scss/app.scss';
let listOfImages =[];

class App extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (<main className="App">
                <header className="align-left">
                    <div><img src={logo} className={"logo"} alt="logo"/></div>
                    {/*<div><h1 className={"align-center"}>The Blue Pill</h1></div>*/}
                    {/*<div></div>*/}
                </header>
                <section>
                    {listOfImages.map((image, index) => <img key={index} src={image} alt="info"/>)}
                </section>
            </main>);
    }
}

export default App;