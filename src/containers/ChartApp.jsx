import React, {
    Component,
} from 'react';

import {
    bindActionCreators,
} from 'redux';

import {
    connect,
} from 'react-redux';

import PropTypes from 'prop-types';

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

    static propTypes = {
        state: PropTypes.shape({
            chartMsg: PropTypes.string,
        }),
        actions: PropTypes.shape({
            changeChartMsg: PropTypes.func,
        }),
    }

    static defaultProps = {
        state: {
            chartMsg: '',
        },
        actions: PropTypes.shape({
            changeChartMsg: () => {},
        }),
    }

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
