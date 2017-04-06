import React, {
    Component,
} from 'react';

import {
    bindActionCreators,
} from 'redux';

import {
    connect,
} from 'react-redux';

import Chart from '../components/Chart';
import chartActions from '../actions/chartActions';

class ChartApp extends Component {
    render() {
        const {
            state,
            actions,
        } = this.props;
        return (
            <Chart
                chartMsg={state.chartMsg}
                {...actions}
            />
        );
    }
}

export default connect(state => ({
    state: state.chart,
}),
dispatch => ({
    actions: bindActionCreators(chartActions, dispatch),
}),
)(ChartApp);
