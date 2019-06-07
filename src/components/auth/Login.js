import React from 'react';
import dbfire from '../config/dbconfig.js';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this); 
    this.state = {
      email: 'SZIET',
      password: ''
    }
  }
  login(e){
    e.preventDefault();
    dbfire.auth().signInWithEmailAndPassword(this.state.email.trim(), this.state.password).then((u) =>{}).catch((error) => {
      console.log(error);
    });
  }
  handleChange(e){
   this.setState({[e.target.name]: e.target.value });
  }
  render(){
    return(
      <center className = "order2">
        <form>
          <h5> Zaloguj się </h5>
          <div className = "input-field">
            <label htmlFor = "email">Email</label>
            <input
              className = "floatright"
              type = "email"
              name = "email"
              id = "email" 
              onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = "password">Password</label>
            <input 
              className = "floatright" 
              type = "password" 
              id = "password"
              name = "password"
              onChange={this.handleChange}/>
          </div>
          <div className = "input-field">
            <button type = "submit" onClick = {this.login} className = "btn lighten-1">Zaloguj</button>
          </div>
        </form>
      </center>
    )
  }
}


export default Login;