let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text);
console.log(text.length);

text.split(' ');
console.log(text.split(' '));

const shoppingCart = [ 'Milk', 'Coffee', 'Tea', 'Honey' ];
shoppingCart.unshift('Meat');
console.log(shoppingCart);
shoppingCart[3] = 'Green Tea';
console.log(shoppingCart);
shoppingCart.pop();
console.log(shoppingCart);

const frontEnd = [ 'HTML', 'CSS', 'JS', 'React', 'Redux' ];
const backEnd = [ 'Node', 'Express', 'MongoDB' ];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
