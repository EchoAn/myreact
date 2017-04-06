import React, {
    Component,
} from 'react';

import {
    Link,
} from 'react-router-dom';

export default class HomeApp extends Component {
    render() {
        return (
            <div>
                <Link to="/chart"> Chart with someone </Link>
                |
                <Link to="/login"> login </Link>
            </div>
        );
    }
}
