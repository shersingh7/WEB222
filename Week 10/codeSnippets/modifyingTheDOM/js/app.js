


//creates a <h1> element
const heading1 = document.createElement("h1");

//The below code does : //<h1>Createing Elements in DOM......</h1>
heading1.innerText="Creating Elements in DOM(SUPER COOL STUFF)";



//creates an <a> element
const hyperLink= document.createElement("a");
hyperLink.setAttribute("href","https://www.twitter.com");
hyperLink.setAttribute("target","_BLANK");


// The below code does <a>Click ME</a>
hyperLink.innerText = "Click Me";


const container = document.querySelector("#container");

container.prepend(heading1);
container.append(hyperLink);
//container.before(heading1);
//container.after(hyperLink);


//This removes an element from the DOM
heading1.remove();



//<a> </a>