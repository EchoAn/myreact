import React, {
    Component,
} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import HomeApp from './HomeApp';
import LoginApp from './LoginApp';

/* eslint-disable */
import loadChartApp from 'bundle-loader?lazy!../containers/ChartApp';
/* eslint-enable */

import Bundle from '../routers/bundle';

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
                    <div>
                        <Route exact path="/" component={HomeApp} />
                        <Route path="/chart" component={ChartApp} />
                        <Route path="/login" component={LoginApp} />
                    </div>
                </Router>
            </div>
        );
    }
}
