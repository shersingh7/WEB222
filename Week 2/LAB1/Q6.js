console.log("Welcome to Final Price Calculator\n");

const price = parseInt(prompt("Enter the price of item: "));
const itemNum = parseInt(prompt("Enter the item number: "));
const itemTitle = parseInt(prompt("Enter the item title: "));
const discount = parseInt(prompt("Enter the discount percentage: "));

console.log(`The original price of the item is ${price}`);

const discountPrice = price / discount;
const finalPrice = price - discountPrice;

console.log(`The final price of the item is ${finalPrice}`);