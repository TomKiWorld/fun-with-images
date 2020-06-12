import React, { Component } from 'react';
import FormInput from '../../components/FormFields/FormInput/FormInput';
import FormSubmit from '../../components/FormFields/FormSubmit/FormSubmit';
import Preloader from '../../components/Preloader/Preloader';
import { DATABASE } from '../../constants';

/**
 * Register component
 * - Allows a user to register to the app by displaying a form
 * 
 * Required props:
 * - loadUser => Functon to get user information from state
 * - onRouteChange => Function to change the state of route
 */
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      registerError: '',
      loading: false
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

  // Set state on input change
  onFieldChange = (event, term) => {
    this.setState({[term]: event.target.value })
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
      this.setState({loading: true})
      fetch(`${DATABASE}/register`, {
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
          this.setState({
            registerError: '',
            loading: false
          });
          this.props.onRouteChange('home');
        } else {
          this.setState({
            registerError: user,
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          registerError: 'Something went wrong please try again later',
          loading: false
        });
      })
    } else {
      this.setState({registerError: 'Something went wrong'});
    }
  }

  render() {
    const nameError = this.state.nameError ? <p className='error-message'>{this.state.nameError}</p> : '';
    const emailError = this.state.emailError ? <p className='error-message'>{this.state.emailError}</p> : '';
    const passwordError = this.state.passwordError ? <p className='error-message'>{this.state.passwordError}</p> : '';
    const registerError = this.state.registerError ? <p className='error-message'>{this.state.registerError}</p> : '';
    const preload = this.state.loading ? <Preloader/> : '';

    return (
      <article className='register br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center'>
        <form className='pa4 black-80'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <h1 className='f1 fw6 ph0 mh0'>Register</h1>
              <FormInput 
                label='Name'
                name='name'
                type='text'
                onChange={(e) => this.onFieldChange(e, 'name')}
              />
              {nameError}
              <FormInput 
                label='Email'
                name='email-address'
                type='email'
                onChange={(e) => this.onFieldChange(e, 'email')}
              />
              {emailError}
              <FormInput 
                label='Password'
                name='password'
                type='password'
                onChange={(e) => this.onFieldChange(e, 'password')}
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
        {preload}     
      </article>
    );
  }
}

export default Register;
