import React from 'react';
import './sign-in.styles.sass'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    render() {
        return (
            <div>
                <hi>I already have an account</hi>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' value={this.state.email} required/>
                    <label>Email</label>
                    <input name='password' type='password' value={this.state.email} required/>
                    <label>Password</label>

                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}

