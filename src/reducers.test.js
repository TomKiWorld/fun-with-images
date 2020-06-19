import * as reducers from './reducers';

import * as actions from './actions';

describe('imageUrlInputValue', () => {
  const inputImageState = {
    inputValue: '',
    imageUrl: '',
    imageUrlError: '',
    resubmit: false
  }
  it('Should return inital state', () => {
    expect(reducers.imageUrlInputValue()).toEqual(inputImageState);
  });

  it('Should handle CHANGE_INPUT_VALUE', () => {
    expect(reducers.imageUrlInputValue(inputImageState, actions.setInputValue('searchTerm') ))
      .toEqual({
        inputValue: 'searchTerm',
        imageUrl: '',
        imageUrlError: '',
        resubmit: false
      });
  });

  it('Should handle RESUBMIT_INPUT_VALUE', () => {
    expect(reducers.imageUrlInputValue(inputImageState, actions.resubmitImageInput('searchTerm') ))
      .toEqual({
        inputValue: 'searchTerm',
        imageUrl: '',
        imageUrlError: '',
        resubmit: false
      });
  });

  it('Should handle RESUBMIT_IMAGE_URL', () => {
    expect(reducers.imageUrlInputValue(inputImageState, actions.resubmitImageUrl(true) ))
      .toEqual({
        inputValue: '',
        imageUrl: '',
        imageUrlError: '',
        resubmit: true
      });
  });

  it('Should handle SET_IMAGE_URL', () => {
    expect(reducers.imageUrlInputValue(inputImageState, actions.setImageUrl('image-url') ))
      .toEqual({
        inputValue: '',
        imageUrl: 'image-url',
        imageUrlError: '',
        resubmit: false
      });
  });

  it('Should handle SET_IMAGE_URL_ERROR', () => {
    expect(reducers.imageUrlInputValue(inputImageState, actions.setImageUrlErr('there was an error') ))
      .toEqual({
        inputValue: '',
        imageUrl: '',
        imageUrlError: 'there was an error',
        resubmit: false
      });
  });
});

describe('userInformation', () => {
  const initalUser = {
    user: {
      id: '',
      name: '',
      email: '',
      avatar: 'avatarOne',
      entries: 0,
      joined: ''
    }
  }

  const mockUser = {
    id: 2,
    name: 'tester',
    email: 'test@gmail.com',
    entries: 5,
    joined: '12-08-2020'
  }
  it('Should return inital state', () => {
    expect(reducers.userInformation()).toEqual(initalUser);
  });

  it('Should handle CHANGE_USER', () => {
    expect(reducers.userInformation(initalUser, actions.setUser(mockUser) ))
      .toEqual({
        user: mockUser
      });
  });

  it('Should handle CHANGE_USER and return empty', () => {
    expect(reducers.userInformation(initalUser, actions.setUser() ))
      .toEqual(initalUser);
  });

  it('Should handle SET_USER_ENTRIES', () => {
    expect(reducers.userInformation(initalUser, actions.setEntries(mockUser, 25) ))
      .toEqual({
        user: {
          id: 2,
          name: 'tester',
          email: 'test@gmail.com',
          entries: 25,
          joined: '12-08-2020'
        }
      });
  });
});
