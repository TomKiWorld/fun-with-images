// Set to false during local development 
// Make sure to change your production url
const productionEnv = true;
export const DATABASE = productionEnv ? 'https://fierce-oasis-21316.herokuapp.com' : 'http://localhost:3000';

// Url input field
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const RESUBMIT_INPUT_VALUE = 'RESUBMIT_INPUT_VALUE';
