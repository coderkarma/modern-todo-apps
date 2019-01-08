const products = [{name: 'computer mouse'}];
const product = products[0];

// Truthy -Vulue that resolve to true in boolean content
//Falsey  - Value that resolve to false in boolean contru
// falsy values - false, 0, empty string, null, undefined
if (product){
    console.log( 'product found');
} else {
    console.log('product not found')
}
