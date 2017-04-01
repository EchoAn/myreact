import React,{
    Component
} from 'react';

import routerConfig from '../routers/routers';

export default class MainApp extends Component {
    render() {
        return (
            <div>
                {this.props.child}
            </div>
        );
    }
}