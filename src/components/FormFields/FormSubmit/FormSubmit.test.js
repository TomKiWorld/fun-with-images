import { shallow } from 'enzyme';
import React from 'react';
import FormSubmit from './FormSubmit';

describe('FormSubmit Component', () => {
  it('Expect to render FormSubmit Component', () => {
    expect(shallow(<FormSubmit />)).toMatchSnapshot();
  });
});
