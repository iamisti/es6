import { productId, productName } from "001-modules-basics/module1.js";
import { productId as id, productName as name } from "001-modules-basics/module1.js";
// we can also use the * wildcard to import all exported variables. Alias is required in this case (as [variableName]).
//      import * as values from "001-modules-basics/module1.js";
// and then we'll have an object with the values as result.

console.log(`${productName} has id: ${productId}`);
console.log(`${name} has id: ${id}`);

/**
 * Notes:
 *  Import statement get hoisted, so no matter if you put at the end of your file,
 *  it contents will be executed and evaluated, and then your code where you imported.
 */
