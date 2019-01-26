import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import IndexLayout from './Layout/IndexLayout';
import App from '../containers/App/App';
import About from '../containers/About';
import NoMatch from '../containers/NoMatch';
import DefaultLayout from "./Layout/DefaultLayout";
import Post from '../containers/Post';


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <IndexLayout path="/" exact component={App}/>
                <IndexLayout path="/about" component={About}/>
                <IndexLayout path="/post" component={Post}/>
                <DefaultLayout component={NoMatch}/>
            </Switch>
        </Router>
    </Provider>
);
export default Root;