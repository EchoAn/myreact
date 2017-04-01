'use strict';

import React, {
    Component
} from 'react';

import {
    Link
} from 'react-router-dom'

export default class HomeApp extends Component {
    constructor(props) {
        super(props);
    }
    routerWillLeave(nextLocation) {
        return 'Your work is not saved! Are you sure you want to leave?'
    }
    render() {
        return (
            <div>
                <Link to="/chart">Chart with someone</Link>
	        </div>
        );
    }
}