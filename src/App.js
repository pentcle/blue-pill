import React from 'react';
import logo from './yearn-logo.svg';
import './app.scss';
var listOfImages =[];

class App extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {
        listOfImages = this.importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));
    }

    render() {
        return (<div className="App">
                <header className="App-header">
                    <img src={logo} alt="logo"/>
                    <p>The Blue Pill</p>
                </header>
                <section>
                    {listOfImages.map((image, index) => <img key={index} src={image} alt="info"></img>)}
                </section>
            </div>);
    }
};

export default App;