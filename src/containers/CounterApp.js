'use strict';

import React, {
    Component
} from 'react';
import {
    bindActionCreators
} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import {
    connect
} from 'react-redux';

class CounterApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            state,
            actions,
            navigation
        } = this.props;
        return (
            <Counter
                counter={state.count}
                {...actions}
                navigate={navigation.navigate}
            />
        );
    }
}

export default connect(state => ({
        state: state.counter
    }),
    (dispatch) => ({
        actions: bindActionCreators(counterActions, dispatch)
    })
)(CounterApp);