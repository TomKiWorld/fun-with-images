import { shallow } from 'enzyme';
import React from 'react';
import ColorList from './ColorList';

describe('ColorList Component', () => {
  const mockProps = {
    showColor: true,
    colors: [
      {hex: "#696969", name: "DimGray"},
      {hex: "#bc8f8f", name: "RosyBrown"}
    ]
  };
  const mockShow = () => {
    return mockProps.showColor = !mockProps.showColor;
  };
  const wrapper =shallow(
    <ColorList 
      colors={mockProps.colors} 
      showColor={mockProps.showColor} 
      onShowClick={mockShow}/>
    );
  const colorBtn = wrapper.find('.close-colors').at(0);

  it('Expect to render ColorList Component', () => {     
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect to change showColor', () => {    
    colorBtn.simulate('click');
    expect(mockProps.showColor).toBe(false);
    colorBtn.simulate('click');
    expect(mockProps.showColor).toBe(true);
  });

  it('Expect not to show color ul', () => {
    expect(shallow(<ColorList 
      colors={[]} 
      showColor={mockProps.showColor} 
      onShowClick={mockShow}/>).exists('ul')).toBe(false);
  });

  it('Expect not to show color list container', () => {
    const mockFalseState = {
      showColor: false,
      colors: [
        {hex: "#696969", name: "DimGray"},
        {hex: "#bc8f8f", name: "RosyBrown"}
      ]
    };
    const mockFalseShow = () => {
      return mockFalseState.showColor = !mockFalseState.showColor;
    };
    const wrapper = shallow(
      <ColorList 
        colors={mockFalseState.colors} 
        showColor={mockFalseState.showColor} 
        onShowClick={mockFalseShow}/>
    );
    const colorBtn = wrapper.find('.close-colors').at(0);
    colorBtn.simulate('click');
    expect(mockFalseState.showColor).toBe(true);
    colorBtn.simulate('click');
    expect(mockFalseState.showColor).toBe(false);
  });
});
