import React from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import Products from './components/Products/Products';
// import Product from './components/Products/Product';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get('https://lambda-team-builder.herokuapp.com')
    .then(res => {this.setState({products: res.data }) })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </div>
        <Route exact path='/' component={Register} />
        <Route path='/login' component={Login}/>
      </div>
    )
  }
}


export default App;

// -Quick rundown of how the project is supposed to be set-up
// -Will there need to be auth on all components?
// -Rundown of how the auth works and login
