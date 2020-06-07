import {
  CHANGE_INPUT_VALUE,
  RESUBMIT_INPUT_VALUE,
  SET_IMAGE_URL,
  SET_IMAGE_URL_ERROR
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
