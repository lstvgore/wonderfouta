import Commerce from '@chec/commerce.js';
// create new instance of commerce js
export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_PUBLIC_KEY, true);