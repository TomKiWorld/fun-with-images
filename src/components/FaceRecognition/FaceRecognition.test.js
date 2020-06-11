import { shallow } from 'enzyme';
import React from 'react';
import FaceRecognition from './FaceRecognition';

describe('FaceRecognition Component', () => {
  const mockProps = {
    showColor: false
  }
  const imageUrl = 'https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_beauty.png'
  const mockShow = () => {
    return mockProps.showColor = !mockProps.showColor;
  }
  const wrapper =shallow(
    <FaceRecognition 
      imageUrl={imageUrl} 
      onShowClick={mockShow}/>
    );
  const colorBtn = wrapper.find('.view-colors').at(0);

  it('Expect to render ColorList Component', () => {     
    expect().toMatchSnapshot(wrapper);
  });

  it('Expect to change showColor', () => {    
    colorBtn.simulate('click');
    expect(mockProps.showColor).toBe(true);
    colorBtn.simulate('click');
    expect(mockProps.showColor).toBe(false);
  });

  it('Expect to close showColor', () => {
    const mockOpenState = {
      showColor: true
    };
    const mockOpenShow = () => {
      return mockOpenState.showColor = !mockOpenState.showColor;
    };
    const wrapper =shallow(
      <FaceRecognition 
        imageUrl={imageUrl} 
        onShowClick={mockOpenShow}/>
      );
    const colorBtn = wrapper.find('.view-colors').at(0);
    colorBtn.simulate('click');
    expect(mockOpenState.showColor).toBe(false);
    colorBtn.simulate('click');
    expect(mockOpenState.showColor).toBe(true);
  });

  it('Expect not to show image', () => {
    expect(shallow(<FaceRecognition 
      imageUrl={''} 
      onShowClick={mockShow}/>
    ).exists('img')).toBe(false);
  });
});
