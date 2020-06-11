import { shallow } from 'enzyme';
import React from 'react';
import FormInput from './FormInput';

describe('FormInput Component', () => {
  it('Expect to render FormInput Component', () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });

  it('Expect to render password FormInput Component', () => {
    expect(shallow(<FormInput name={'password'}/>)).toMatchSnapshot();
  });

  it('Expect to render email-address FormInput Component', () => {
    expect(shallow(<FormInput name={'email-address'}/>)).toMatchSnapshot();
  });

  it('Expect to render name FormInput Component', () => {
    expect(shallow(<FormInput name={'name'}/>)).toMatchSnapshot();
  });
});
