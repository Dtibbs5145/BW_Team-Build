import React from 'react';
import Axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            name: '',
            email: '',
            password: ''
        }
    }

    addAdmin = e => {
        e.preventDefault();
        if(localStorage.getItem('token')) {
            this.setState({
                loggedOn: true
            });
        } else {
            this.setState({
                loggedIn: false
            })
        }
        Axios.post('https://lambda-team-builder.herokuapp.com/api/auth/register')
            .then(res => { this.setState({ products: res.data }) })
            .catch(err => console.log(err));
        this.setState({
            name: '',
            email: '',
            password: ''
        });
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className='register-form'>
                <form onSubmit={this.state.addAdmin}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Full Name'
                        value={this.state.name}
                        name='name'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Email Address'
                        value={this.state.email}
                        name='email'
                    />
                    <input 
                        onChange={this.handleInputChange}
                        placeholder="Password"
                        value={this.state.password}
                        name='password'
                    />
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }

}

export default Register;