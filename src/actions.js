import {
  CHANGE_INPUT_VALUE,
  RESUBMIT_INPUT_VALUE
} from './constants';

export const setInputValue = (text) => {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: text
  }
};

export const resubmitImageInput = (text) => {
  return {
    type: RESUBMIT_INPUT_VALUE,
    payload: text
  }
};
