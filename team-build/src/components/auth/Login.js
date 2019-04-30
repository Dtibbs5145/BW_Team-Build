import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
            </div>
        )
    }
    
    
}

export default Login;