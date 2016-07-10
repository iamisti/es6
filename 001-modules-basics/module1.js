export let productId = 99;
export let productName = 'BuildIt';

// 'default' export, e.g.: if you don't specify, this value will be exported.
// e.g.:
//      import someValue from "001-modules-basics/module1.js"; --> will take the value 'Something';

// We can also explicitly say:
// e.g.:
//      import default as someValue from "001-modules-basics/module1.js"; --> will take the value 'Something';
let productType = 'Something';
export default productType
//or
//export { productType as default, productId, productName };