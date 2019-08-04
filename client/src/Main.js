import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { OverviewPage } from './components/OverviewPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ProductsPage } from './components/ProductsPage';

export class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={OverviewPage} />
                <Route exact path='/about-us' component={AboutUsPage} />
                <Route exact path='/products' component={ProductsPage} />
            </Switch>
        );
    }
}
