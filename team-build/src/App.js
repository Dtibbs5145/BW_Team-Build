import React from 'react';
import './App.css';
import axios from 'axios';

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
}


export default App;

// -Quick rundown of how the project is supposed to be set-up
// -Will there need to be auth on all components?
// -Rundown of how the auth works and login
