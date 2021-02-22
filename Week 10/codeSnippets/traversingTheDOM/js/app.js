
//Traversing downwards using the querySelectorAll property

//selecting all the children divs within the element with the id first-section
//querySelectorAll returns an array-like object called a NodeList
const divs = document.querySelectorAll("#first-section > div");


//selecting the element with the id first-section
const section = document.querySelector("#first-section");
console.log(divs);

//printing the length of the NodeList
console.log(`The number of divs returned = ${divs.length}`);
//console.log(divs[0]);


//firstElementChild returns the first Child element nested within a particular element
console.log("First Div within the section");
console.log(section.firstElementChild);

//lastElementChild returns the last Child element nested within a particular element
console.log("Last Div within the section");
console.log(section.lastElementChild);
/*
console.log("\n\n\n");

divs.forEach((div,index)=>{
    console.log(`Div No : ${index+1}`);
    console.log(div);
}) ;

*/

//selecting all the children element within the 1st div using the children property
//children returns an HTMLCollection
const childrenOfFirstDiv =  Array.from(divs[0].children);


//HTMLCollection does not allow you to use a forEach by default
//to use it you have to use Array.from() to covert it into a regular array
console.log("traversing the first div");
childrenOfFirstDiv.forEach((child,index)=>{
    console.log(`Child No : ${index+1}`);
    console.log(child);
}) ;

/*
console.log(childrenOfFirstDiv);
console.log(`The number of children returned = ${childrenOfFirstDiv.length}`);
*/


const div3 = divs[2];
console.log(div3);

//traverse sideways 
//this will print the 4th div
console.log(div3.nextElementSibling);

//this will print the 2nd div
console.log(div3.previousElementSibling);


//traverse upwards

const hyperlink = document.querySelector("body > section:nth-child(2) > p > a");

console.log(hyperlink);

console.log(hyperlink.parentElement.parentElement)