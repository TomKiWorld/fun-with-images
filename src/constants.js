// Set to false during local development 
// Make sure to change your production url
const productionEnv = true;
export const DATABASE = productionEnv ? 'https://fierce-oasis-21316.herokuapp.com' : 'http://localhost:3000';

// Image url setup
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESUBMIT_INPUT_VALUE = 'RESUBMIT_INPUT_VALUE';
export const SET_IMAGE_URL = 'SET_IMAGE_URL';
export const SET_IMAGE_URL_ERROR = 'SET_IMAGE_URL_ERROR';

// User information
export const CHANGE_USER = 'CHANGE_USER';
export const SET_USER_ENTRIES = 'SET_USER_ENTRIES';
