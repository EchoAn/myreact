import React, {
    Component,
} from 'react';

import {
    bindActionCreators,
} from 'redux';

import {
    connect,
} from 'react-redux';

import {
    withRouter,
} from 'react-router-dom';

import Chart from '../components/Chart';
import chartActions from '../actions/chartActions';

// 懒加载需要手动绑定router相关信息
@withRouter
@connect(
    state => ({
        state: state.chart,
    }),
    dispatch => ({
        actions: bindActionCreators(chartActions, dispatch),
    }),
)
export default class ChartApp extends Component {
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
