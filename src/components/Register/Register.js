import React, { Component } from 'react';
import FormInput from '../FormFields/FormInput/FormInput';
import FormSubmit from '../FormFields/FormSubmit/FormSubmit';

/**
 * Register component
 * - Allows a user to register to the app by displaying a form
 * 
 * Required props:
 * - loadUser => Functon to get user information from state
 * - onRouteChange => Function to change the state of route
 */
class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      registerError: ''
    }
  }

  // Allow pressing the enter key and not only the button
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      const register = document.querySelector('.register');
      register.click();
    }
  }

  // Sanitize user input
  sanitize = (string) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return string.replace(reg, (match)=>(map[match]));
  }

  // Set name on input change
  onNameChange = (event) => {
    this.setState({name: event.target.value })
  }

  // Set email on input change
  onEmailChange = (event) => {
    this.setState({email: event.target.value })
  }

  // Set password on input change
  onPasswordChange = (event) => {
    this.setState({password: event.target.value })
  }

  // Validate user input and register the user
  onSubmitRegister = (e) => {
    e.preventDefault();
    let {name, email, password } = this.state;
    let validName = false;
    let validEmail = false;
    let validPassword = false;
    const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (name !== '' ) {
      name = this.sanitize(name)
      this.setState({name: name})
      validName = true
      this.setState({nameError: ''});
    } else {
      this.setState({nameError: 'Please enter your name'});
    }

    if ((email !== '') && (regexpEmail.test(email))) {
      validEmail = true
      this.setState({emailError: ''});
    } else {
      this.setState({emailError: 'Please enter your email'});
    }

    if (password !== '' ) {
      validPassword = true
      this.setState({passwordError: ''});
    } else {
      this.setState({passwordError: 'Please enter your password'});
    }  

    if ( validName && validEmail && validPassword ) {
      fetch(`${this.props.database}/register`, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      this.setState({registerError: ''});
    } else {
      this.setState({registerError: 'Something went wrong'});
    }
  }

  render() {
    const nameError = this.state.nameError ? <p className='error-message'>{this.state.nameError}</p> : '';
    const emailError = this.state.emailError ? <p className='error-message'>{this.state.emailError}</p> : '';
    const passwordError = this.state.passwordError ? <p className='error-message'>{this.state.passwordError}</p> : '';
    const registerError = this.state.registerError ? <p className='error-message'>{this.state.registerError}</p> : '';

    return (
      <article className='register br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center'>
        <form className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Register</legend>
              <FormInput 
                label='Name'
                name='name'
                type='text'
                onChange={this.onNameChange}
                onKeyUp={this.handleKeyUp}
              />
              {nameError}
              <FormInput 
                label='Email'
                name='email-address'
                type='email'
                onChange={this.onEmailChange}
                onKeyUp={this.handleKeyUp}
              />
              {emailError}
              <FormInput 
                label='Password'
                name='password'
                type='password'
                onChange={this.onPasswordChange}
                onKeyUp={this.handleKeyUp}
              />
              {passwordError}
            </fieldset>
            <FormSubmit
              value='Register'
              type='submit'
              onClick={this.onSubmitRegister}
              extraClass='register'
            />
            {registerError}
          </div>
        </form>        
      </article>
    );
  }
}

export default Register;
