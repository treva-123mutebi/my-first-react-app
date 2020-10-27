import React, { Component } from 'react';
import logo from '../shared/images/logo.svg';
import Home from './Home/Home';

// We import our Home component here...
//import Home from './Home/Home';
import './App.css';

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h1 className = "App-title" > Welcome to React < /h1> < /
            header > { /* Here we add our Home component to be render it */ } <
            Home / >
            <
            /div>
        );
    }
}

export default App;