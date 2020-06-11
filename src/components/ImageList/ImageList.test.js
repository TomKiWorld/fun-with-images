import { shallow } from 'enzyme';
import React from 'react';
import ImageList from './ImageList';

describe('ImageList Component', () => {
  const mockImages = [
    {
      id: 10,
      url: 'https://i.pinimg.com/originals/29/80/94/298094c2d1dbf6267d5e61d741b902c2.jpg'
    }
  ];

  it('Expect to render ImageList Component', () => {
    expect(shallow(<ImageList images={mockImages}/>)).toMatchSnapshot();
  });
});
