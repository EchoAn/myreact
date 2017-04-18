import React, {
    Component,
} from 'react';

import PropTypes from 'prop-types';

export default class Login extends Component {

    static propTypes = {
        userLogin: PropTypes.func,
    }

    static defaultProps = {
        userLogin: () => {},
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.login = this.login.bind(this);
    }

    login() {
        const {
            userLogin,
            history, // eslint-disable-line
        } = this.props;
        const username = this.state.username;
        const password = this.state.password;
        userLogin(username, password, history);
    }

    render() {
        return (
            <div>
                <div className="username">
                    <span>username:</span>
                    <input
                        type="text"
                        onChange={event => this.setState({ username: event.target.value })}
                        value={this.state.username}
                    />
                </div>
                <div>
                    <span>password:</span>
                    <input
                        type="password"
                        onChange={event => this.setState({ password: event.target.value })}
                        value={this.state.password}
                    />
                </div>
                <div>
                    <button onClick={this.login}>Login</button>
                </div>
            </div>
        );
    }
}
