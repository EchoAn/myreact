import React, {
    Component,
} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import HomeApp from './HomeApp';
import LoginApp from './LoginApp';
import NotFound from './NotFound';

/* eslint-disable */
import loadChartApp from 'bundle-loader?lazy!../containers/ChartApp';
/* eslint-enable */

import Bundle from '../bundle';

const ChartApp = () => (
    <Bundle load={loadChartApp}>
        {App => <App />}
    </Bundle>
);

export default class RouterApp extends Component {
    componentDidMount() {
        loadChartApp(() => {});
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomeApp} />
                        <Route path="/chart" component={ChartApp} />
                        <Route path="/login" component={LoginApp} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
