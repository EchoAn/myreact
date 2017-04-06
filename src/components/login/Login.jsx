import React, {
    Component,
} from 'react';

export default class Login extends Component {
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
        } = this.props;
        const username = this.state.username;
        const password = this.state.password;
        userLogin(username, password);
    }

    render() {
        const isFetching = this.props.isFetching;
        return (
            <div>
                <div>
                    <span>username:</span>
                    <input
                        type='text'
                        onChange={event => this.setState({ username: event.target.value })}
                        value={this.state.username}
                    />
                </div>
                <div>
                    <span>password:</span>
                    <input
                        type='password'
                        onChange={event => this.setState({ password: event.target.value })}
                        value={this.state.password}
                    />
                </div>
                <div>
                    <button onClick={this.login}>Login</button>
                </div>
                <div>
                    <span>{isFetching ? 'Loading...' : ''}</span>
                </div>
            </div>
        );
    }
}
