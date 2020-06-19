import { shallow } from 'enzyme';
import React from 'react';
import FormInput from './FormInput';

describe('FormInput Component', () => {
  it('Expect to render FormInput Component', () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });

  it('Expect to renderFormInput Component as password', () => {
    const wrapper = shallow(<FormInput name={'password'}/>);
    const input = wrapper.find('input').at(0);
    expect(input.prop('name')).toBe('password');
  });

  it('Expect to render FormInput Component as email-address', () => {
    const wrapper = shallow(<FormInput name={'email-address'}/>);
    const input = wrapper.find('input').at(0);
    expect(input.prop('name')).toBe('email-address');
  });

  it('Expect to render FormInput Component as name', () => {
    const wrapper = shallow(<FormInput name={'name'}/>);
    const input = wrapper.find('input').at(0);
    expect(input.prop('name')).toBe('name');
  });

  it('Expect to render FormInput Component with placeholder', () => {
    const wrapper = shallow(<FormInput name={'name'} placeholder={'Guest'}/>);
    const input = wrapper.find('input').at(0);
    expect(input.prop('placeholder')).toBe('Guest');
  });
});
