import { shallow } from 'enzyme';
import React from 'react';
import PopUpMsg from './PopUpMsg';

describe('PopUpMsg Component', () => {
  const wrapper = shallow(<PopUpMsg message={'Hello'} />);

  it('Expect to render PopUpMsg Component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
