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

  // Set state on input change
  onFieldChange = (event, term) => {
    this.setState({[term]: event.target.value })
  }

  // Sign in 
  onSubmitSignIn = (e, email, password) => {
    e.preventDefault();
    if ((email !== '') && (password !== '')) {
      fetch(`${DATABASE}/signin`, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({loginError: user});
        }
      })
    } else {
      this.setState({loginError: 'Please make sure both fields are entered'});
    }
  }

  render() {
    const { onRouteChange } = this.props;
    const loginError = this.state.loginError ? <p className='error-message'>{this.state.loginError}</p> : '';

    return (
      <article className='sign-in br3 ba dark-gray b--black-10 mv4 mw6 shadow-5 center'>
        <form className='pa4 black-80' action='/'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <h1 className='f1 fw6 ph0 mh0'>Sign In</h1>
              <FormInput 
                label='Email'
                name='email-address'
                type='email'
                onChange={(e) => this.onFieldChange(e, 'signInEmail')}
                onKeyUp={this.handleKeyUp}
                extraClass='inputField'
              />
              <FormInput 
                label='Password'
                name='password'
                type='password'
                onChange={(e) => this.onFieldChange(e, 'signInPassword')}
                onKeyUp={this.handleKeyUp}
                extraClass='inputField'
              />
            </fieldset>
            {loginError}
            <FormSubmit
              value='Sign in'
              type='submit'
              onClick={(e) => this.onSubmitSignIn(e, this.state.signInEmail, this.state.signInPassword)}
              extraClass='signIn'
            />
            <FormSubmit
              value='Log in as Visitor'
              type='submit'
              onClick={(e) => this.onSubmitSignIn(e, 'visitor@gmail.com', 'visit')}
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
