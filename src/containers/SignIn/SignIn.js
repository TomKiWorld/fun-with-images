import React, { Component } from 'react';
import FormInput from '../../components/FormFields/FormInput/FormInput';
import FormSubmit from '../../components//FormFields/FormSubmit/FormSubmit';
import { DATABASE } from '../../constants';

/**
 * Sign In component
 * - Allows a user to sign in to the app by displaying a form
 * 
 * Required props:
 * - loadUser => Functon to get user information from state
 * - onRouteChange => Function to change the state of route
 */
class SignIn extends Component {
  constructor(props) {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
      loginError: ''
    }
  }

  // Allow pressing the enter key and not only the button
  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      const signIn = document.querySelector('.signIn');
      signIn.click();
    }
  }

  // Set email on input change
  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value })
  }

  // Set password on input change
  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value })
  }

  // Check for user in database and login 
  onSubmitSignIn = (e) => {
    e.preventDefault();
    if ((this.state.signInEmail !== '') && (this.state.signInPassword !== '')) {
      fetch(`${DATABASE}/signin`, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.setState({loginError: ''});
          this.props.onRouteChange('home');
        } else {
          this.setState({loginError: user});
        }
      })
    } else {
      this.setState({loginError: 'Please make sure both fields are entered'});
    }
  }

  // Sign in as visitor
  onSubmitVisitor = (e) => {
    e.preventDefault();
    fetch(`${DATABASE}/signin`, {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: 'visitor@gmail.com',
        password: 'visit'
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
    const loginError = this.state.loginError ? <p className='error-message'>{this.state.loginError}</p> : '';

    return (
      <article className='sign-in br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center'>
        <form className='pa4 black-80' action='/'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
              <FormInput 
                label='Email'
                name='email-address'
                type='email'
                onChange={this.onEmailChange}
                onKeyUp={this.handleKeyUp}
                extraClass='inputField'
              />
              <FormInput 
                label='Password'
                name='password'
                type='password'
                onChange={this.onPasswordChange}
                onKeyUp={this.handleKeyUp}
                extraClass='inputField'
              />
            </fieldset>
            {loginError}
            <FormSubmit
              value='Sign in'
              type='submit'
              onClick={this.onSubmitSignIn}
              extraClass='signIn'
            />
            <FormSubmit
              value='Log in as Visitor'
              type='submit'
              onClick={this.onSubmitVisitor}
              // extraClass=''
            />
            <div className='lh-copy mt3'>
              <p 
                onClick={() => onRouteChange('register')}
                className='f6 link dim black db pointer'>Register</p>
            </div>
          </div>
        </form>
      </article>
    );
  }  
}

export default SignIn;
