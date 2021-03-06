import {
  CHANGE_INPUT_VALUE,
  RESUBMIT_INPUT_VALUE,
  RESUBMIT_IMAGE_URL,
  SET_IMAGE_URL,
  SET_IMAGE_URL_ERROR,
  CHANGE_USER,
  SET_USER_ENTRIES
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

export const resubmitImageUrl = (bool) => {
  return {
    type: RESUBMIT_IMAGE_URL,
    payload: bool
  }
};

export const setImageUrl = (text) => {
  return {
    type: SET_IMAGE_URL,
    payload: text
  }
};

export const setImageUrlErr = (text) => {
  return {
    type: SET_IMAGE_URL_ERROR,
    payload: text
  }
};

export const setUser = (data) => {
  return {
    type: CHANGE_USER,
    payload: data
  }
};

export const setEntries = (user, count) => {
  return {
    type: SET_USER_ENTRIES,
    payload: {
      user,
      count
    }
  }
};
