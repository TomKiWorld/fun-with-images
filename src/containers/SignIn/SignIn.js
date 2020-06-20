import React, { Component } from 'react';
import FormInput from '../../components/FormFields/FormInput/FormInput';
import FormSubmit from '../../components//FormFields/FormSubmit/FormSubmit';
import Preloader from '../../components/Preloader/Preloader';
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
  constructor() {
    super();
    this.state = {
      signInEmail: '',
      signInPassword: '',
      loginError: '',
      loading: false
    }
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if(token) {
      fetch(`${DATABASE}/signin`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
          'Authorization': token
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if ( data && data.id) {
          this.getUserData(data.id, token);
        }
      })
    }
  }

  getUserData = (id, token) => {
    return fetch(`${DATABASE}/profile/${id}`, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    })
    .then(resp => resp.json())
    .then(user => {
      if (user && user.email) {
        this.props.loadUser(user);
        this.setState({loading: false});
        this.props.onRouteChange('home');    
      } else {
        this.setState({
          loginError: user,
          loading: false
        });
      }
    })
    .catch(err => console.log(err))
  }

  // Set state on input change
  onFieldChange = (event, term) => {
    this.setState({[term]: event.target.value })
  }

  // Sign in 
  onSubmitSignIn = (e, email, password) => {
    e.preventDefault();
    if ((email !== '') && (password !== '')) {
      this.setState({loading: true})
      fetch(`${DATABASE}/signin`, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.userId && data.success === 'true') {
          this.props.saveToken(data.token);
          this.getUserData(data.userId, data.token);
        } else {
          this.setState({
            loginError: data,
            loading: false
          });
        }
      })
      .catch(err => {
        this.setState({
          loginError: 'Something went wrong please try again later',
          loading: false
        });
      })
    } else {
      this.setState({loginError: 'Please make sure both fields are entered'});
    }
  }

  render() {
    const { onRouteChange } = this.props;
    const loginError = this.state.loginError ? <p className='error-message'>{this.state.loginError}</p> : '';
    const preload = this.state.loading ? <Preloader/> : '';

    return (
      <article className='sign-in ba dark-gray b--black-10 mv4 mw6 shadow-5 center'>
        <form className='pa4 black-80' action='/'>
          <div className='measure'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <h1 className='f1 fw6 ph0 mh0'>Sign In</h1>
              <FormInput 
                label='Email'
                name='email-address'
                type='email'
                onChange={(e) => this.onFieldChange(e, 'signInEmail')}
                extraClass='inputField'
              />
              <FormInput 
                label='Password'
                name='password'
                type='password'
                onChange={(e) => this.onFieldChange(e, 'signInPassword')}
                extraClass='inputField'
              />
            </fieldset>
            {loginError}
            <FormSubmit
              value='Sign in'
              onClick={(e) => this.onSubmitSignIn(e, this.state.signInEmail, this.state.signInPassword)}
              extraClass='signIn'
            />
            <FormSubmit
              value='Log in as Visitor'
              onClick={(e) => this.onSubmitSignIn(e, 'visitor@gmail.com', 'visit')}
            />
            <div className='lh-copy mt3'>
              <p 
                onClick={() => onRouteChange('register')}
                className='f6 link dim black db pointer'>Register</p>
            </div>
          </div>
        </form>
        {preload}
      </article>
    );
  }  
}

export default SignIn;
