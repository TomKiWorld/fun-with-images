import { shallow } from 'enzyme';
import React from 'react';
import FaceRecognition from './FaceRecognition';

describe('FaceRecognition Component', () => {
  const mockProps = {
    imageUrl: '',
    colors: []
  }
  const wrapper =shallow(
    <FaceRecognition {...mockProps}/>
    );

  it('Expect to render ColorList Component', () => {     
    expect().toMatchSnapshot(wrapper);
  });

  it('Expect to show image', () => {
    expect(shallow(<FaceRecognition 
      imageUrl={'https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_main_beauty.png'} />
    ).exists('img')).toBe(true);
  });
});
