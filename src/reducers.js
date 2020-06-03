import {
  CHANGE_INPUT_VALUE,
  RESUBMIT_INPUT_VALUE
} from './constants'

const inputInitalState = {
  inputValue: ''
}

export const imageUrlInputValue = (state=inputInitalState, action={}) => {
  switch(action.type){
    case CHANGE_INPUT_VALUE : 
      return { ...state, inputValue: action.payload };
    case RESUBMIT_INPUT_VALUE :
      return { ...state, inputValue: action.payload }
    default:
      return state;
  }
}
