import React from 'react';
import './sign-in.styles.sass';
import FormInput from '../../form-input.component.jsx'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }


    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange= event => {
        const { name, value } = event.target;

        this.setState({ [name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    required
                    label='email'
                    />
        
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required
                    label='password'
                    />
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}


export default SignIn;