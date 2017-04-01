import React, {
    Component
} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.login = this.login.bind(this);
    }

    login() {
        let {
            userLogin,
            state
        } = this.props;
        let username = this.state.username;
        let password = this.state.password;
        console.log(username);
        userLogin(username, password);
    }

    render() {
        console.log(this.props);
        let isFetching = this.props.isFetching;
        return (
            <div>
				<div>
					<span>username:</span>
					<input type="text"
						onChange={(event) => this.setState({username:event.target.value})}
						value={this.state.username}
					>
					</input>
				</div>
				<div>
					<span>password:</span>
					<input
						type = 'password'
						onChange={(event) => this.setState({password:event.target.value})}
						value={this.state.password}
					>
					</input>
				</div>
				<div>
						<button onClick={this.login}>Login</button>
				</div>
				<div>
					<span>{isFetching?'Loading...':''}</span>
				</div>
			</div>
        )
    }
}