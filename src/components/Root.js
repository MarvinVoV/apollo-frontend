import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import IndexLayout from './Layout/IndexLayout';
import App from '../containers/App/App';
import Article from '../containers/App/Article';
import About from '../containers/About';
import NoMatch from '../containers/NoMatch';
import DefaultLayout from "./Layout/DefaultLayout";


const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <IndexLayout path="/" exact component={App}/>
                <IndexLayout path="/front/article/p/:id" component={Article}/>
                <IndexLayout path="/front/about" component={About}/>
                <DefaultLayout component={NoMatch}/>
            </Switch>
        </Router>
    </Provider>
);
export default Root;