import { shallow } from 'enzyme';
import React from 'react';
import Register from './Register';

describe('Register Component', () => {
  const wrapper = shallow(<Register />);
  const nameInput = wrapper.find('[name=\'name\']').at(0);
  const emailInput = wrapper.find('[name=\'email-address\']').at(0);
  const passwordInput = wrapper.find('[name=\'password\']').at(0);
  
  it('Expect to render Register Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to sanitize string', () => {
    expect.assertions(7);
    expect(wrapper.instance().sanitize('&')).toBe('&amp;');
    expect(wrapper.instance().sanitize('<')).toBe('&lt;');
    expect(wrapper.instance().sanitize('>')).toBe('&gt;');
    expect(wrapper.instance().sanitize('"')).toBe('&quot;');
    expect(wrapper.instance().sanitize("'")).toBe('&#x27;');
    expect(wrapper.instance().sanitize('/')).toBe('&#x2F;');
    expect(wrapper.instance().sanitize('test')).toBe('test');
  });

  it('Expect to handle error submit register', () => {
    const submitBtn = wrapper.find('[value=\'Register\']').at(0);
    submitBtn.simulate('click', { preventDefault: jest.fn() });
    expect.assertions(5);
    expect(wrapper.state().nameError).toEqual('Please enter your name');
    expect(wrapper.state().emailError).toEqual('Please enter your email');
    expect(wrapper.state().passwordError).toEqual('Please enter your password');
    expect(wrapper.state().registerError).toEqual('Something went wrong');
    expect(wrapper.state().loading).toEqual(false);
  });

  it('Expect to handle name change', () => {
    nameInput.simulate('change', { target: { value: 'John', term: 'name'} });
    expect(wrapper.state().name).toEqual('John');
  });

  it('Expect to handle email change', () => {
    emailInput.simulate('change', { target: { value: 'john@gmail.com', term: 'email'} });
    expect(wrapper.state().email).toEqual('john@gmail.com');
  });

  it('Expect to handle password change', () => {
    passwordInput.simulate('change', { target: { value: 'unsafePassword', term: 'password'} });
    expect(wrapper.state().password).toEqual('unsafePassword');
  });

  it('Expect to handle submit register', () => {
    const submitBtn = wrapper.find('[value=\'Register\']').at(0);
    submitBtn.simulate('click', { preventDefault: jest.fn() });
    expect(wrapper.state().loading).toEqual(true);
  });
});
