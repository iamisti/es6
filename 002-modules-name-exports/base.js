import {productId, product} from "002-modules-name-exports/module1.js";

// #1 We can't override the direct value for an imported variable.
// The following expression would throw an error: 'Runtime error: productID is read-only'
//      productId = 8000;

// #2 What we can is to change an imported object properties.
product.productId = 500;
console.log(product.productId);

// #3 The following example shows what we mean by named exports. When we export showProduct in module2.js
// we only export the name showProduct. We only exporting the name showProduct as a function.
// We're not exporting the actual function.
// So when that name changes 'shorProduct', if it's get updated to a new function, base.js will call that new function.
import {showProduct, updateFunction} from "./module2.js";

showProduct();
updateFunction();
showProduct();