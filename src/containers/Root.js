import React, {
    Component
} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import HomeApp from '../containers/HomeApp';
import loadChartApp from 'bundle-loader?lazy!../containers/ChartApp';

import Bundle from '../routers/Bundle';

const ChartApp = () => (
    <Bundle load={loadChartApp}>
        {(ChartApp) => <ChartApp/>}
    </Bundle>
)

export default class RouterApp extends Component {
    componentDidMount() {
        loadChartApp(() => {})
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={HomeApp}/>
                        <Route path="/chart" component={ChartApp}/>
                    </div>
                </Router>
            </div>
        );
    }
}