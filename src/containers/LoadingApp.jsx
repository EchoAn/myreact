import React, {
    Component,
} from 'react';

import {
    connect,
} from 'react-redux';

import PropTypes from 'prop-types';

import Loading from '../components/Loading';

@connect(
    state => ({
        state: state.http,
    }),
)
export default class LoadingApp extends Component {

    static propTypes = {
        state: PropTypes.shape({
            isFetching: PropTypes.bool,
        }),
    }

    static defaultProps = {
        state: {
            isFetching: false,
        },
        actions: PropTypes.shape({
            changeChartMsg: () => {},
        }),
    }

    render() {
        const {
            state,
        } = this.props;
        return (
            <Loading
                visible={state.isFetching}
            />
        );
    }
}
