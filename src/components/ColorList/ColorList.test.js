import { shallow } from 'enzyme';
import React from 'react';
import ColorList from './ColorList';

describe('ColorList Component', () => {
  const mockProps = {
    colors: [
      {hex: "#696969", name: "DimGray"},
      {hex: "#bc8f8f", name: "RosyBrown"}
    ]
  };
  const wrapper =shallow(<ColorList {...mockProps} />);

  it('Expect to render ColorList Component', () => {     
    expect(wrapper).toMatchSnapshot();
  });

  it('Expect not to show color ul', () => {
    expect(shallow(<ColorList 
      colors={[]} />).exists('ul')).toBe(false);
  });
});
