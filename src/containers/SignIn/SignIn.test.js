import { shallow } from 'enzyme';
import React from 'react';
import SignIn from './SignIn';

describe('SignIn Component', () => {
  const wrapper = shallow(<SignIn />);
  const nameInput = wrapper.find('[name=\'email-address\']').at(0);
  const passwordInput = wrapper.find('[name=\'password\']').at(0);

  it('Expect to render SignIn Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to handle error submit sign in', () => {
    const submitBtn = wrapper.find('[value=\'Sign in\']').at(0);
    submitBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().loginError).toEqual('Please make sure both fields are entered');
  });

  it('Expect to handle email change', () => {
    nameInput.simulate('change', { target: { value: 'john@gmail.com', term: 'email'} });
    expect(wrapper.state().signInEmail).toEqual('john@gmail.com');
  });

  it('Expect to handle password change', () => {
    passwordInput.simulate('change', { target: { value: 'unsafePassword', term: 'password'} });
    expect(wrapper.state().signInPassword).toEqual('unsafePassword');
  });

  it('Expect to handle submit sign in', () => {
    const submitBtn = wrapper.find('[value=\'Sign in\']').at(0);
    submitBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().loading).toEqual(true);
  });

  it('Expect to handle submit sign in as visitor', () => {
    const submitBtn = wrapper.find('[value=\'Log in as Visitor\']').at(0);
    submitBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().loading).toEqual(true);
  });
});
