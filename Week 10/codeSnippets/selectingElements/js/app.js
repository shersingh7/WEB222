


//SELECTING ELEMENTS FROM THE DOM USING THE getElementById() 
//getElementByID will always return one element based on the id provided;
const link  = document.getElementById("about-us-link");


//querySelector is also DOMmethod that always us to select or reference an(1) individual element
//from within the DOM!
const link2 = document.querySelector("#contact-us-link");


const div1 = document.querySelector("#first-section > div:nth-child(1)");
console.log(div1);

const h2 = document.querySelector("#first-section > div:nth-child(1) > h2");
console.log(h2);

const p = document.querySelector("#first-section > div:nth-child(1) > p");
console.log(p);

const section = document.querySelector("section");
console.log(section);

const headerLinks = document.querySelector(".header-links");
console.log(headerLinks)




/*



console.log(link2);
console.log(link);
*/