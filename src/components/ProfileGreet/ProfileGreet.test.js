import { shallow } from 'enzyme';
import React from 'react';
import ProfileGreet from './ProfileGreet';

describe('ProfileGreet Component', () => {
  const wrapper = shallow(<ProfileGreet entries={5} />);
  it('Expect to render ProfileGreet Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to render ProfileGreet Component with entries', () => {
    const title = wrapper.find('h3').at(0);
    expect(title.text()).toBe('The following images were submitted by you:');
  });
  it('Expect to render ProfileGreet Component without entries', () => {
    const wrapper = shallow(<ProfileGreet entries={0} />);
    const title = wrapper.find('h3').at(0);
    expect(title.text()).toBe('You haven\'t submitted any images yet..');
  });
});
