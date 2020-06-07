import {
  CHANGE_INPUT_VALUE,
  RESUBMIT_INPUT_VALUE,
  SET_IMAGE_URL,
  SET_IMAGE_URL_ERROR,
  CHANGE_USER,
  SET_USER_ENTRIES
} from './constants'

const inputImageState = {
  inputValue: '',
  imageUrl: '',
  imageUrlError: ''
}

export const imageUrlInputValue = (state=inputImageState, action={}) => {
  switch(action.type){
    case CHANGE_INPUT_VALUE : 
      return { ...state, inputValue: action.payload };
    case RESUBMIT_INPUT_VALUE :
      return { ...state, inputValue: action.payload };
    case SET_IMAGE_URL :
      return { ...state, imageUrl: action.payload };
    case SET_IMAGE_URL_ERROR :
      return { ...state, imageUrlError: action.payload };
    default:
      return state;
  }
}

const initalUser = {
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

export const userInformation = (state=initalUser, action={}) => {
  switch(action.type) {
    case CHANGE_USER:
      console.log(action.payload)
      if (action.payload.id) {
        const user = action.payload;
        return {
          ...state, user: {
            id: user.id,
            name: user.name,
            email: user.email,
            entries: user.entries,
            joined: user.joined
          }
        }
      };
      return state;
    case SET_USER_ENTRIES:
        return { ...state, user:{ entries:action.payload }};
    default:
      return state;
  }
};
