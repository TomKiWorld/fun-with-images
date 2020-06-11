import { shallow } from 'enzyme';
import React from 'react';
import ImageCard from './ImageCard';

describe('ImageCard Component', () => {
  const mockProps= {
    resubmit: false
  };
  const onMockResubmit = () => {
    mockProps.resubmit= true;
  };
  const wrapper= shallow(
    <ImageCard 
      id={1} 
      url={'https://i.mdel.net/mdx/i/2019/01/2019_01_16_Models.com_15.jpg'}
      onResubmit={onMockResubmit}
      />     
  );
  const resubmitBtn = wrapper.find('.card-button').at(0);

  it('Expect to render ImageCard Component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to resubmit the image', () => {
    resubmitBtn.simulate('click')
    expect(mockProps.resubmit).toBe(true);
  });
});