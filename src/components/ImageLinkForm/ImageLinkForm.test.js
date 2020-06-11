import { shallow } from 'enzyme';
import React from 'react';
import ImageLinkForm from './ImageLinkForm';

describe('ImageLinkForm Component', () => {
  const mockProps = {
    value: '',
    clicked: false
  };
  const mockChange = (value) => {
    mockProps.value= value;
  };
  const wrapper = shallow(
    <ImageLinkForm 
      onInputChange={(value) => mockChange(value)}
    />
  );
  it('Expect to render ImageLinkForm Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to react to change', () => {
    const urlInput =wrapper.find('input').at(0);
    urlInput.simulate('change', { target: { value: 'image-url'} });
    expect(mockProps.value).toBe('image-url');
  });
});
