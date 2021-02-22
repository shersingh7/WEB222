


const displayMessge = ()=>{
    alert("Dude, blah blah blah blah ");
}

const number1TxtBox = document.querySelector("#number1");
const number2TxtBox = document.querySelector("#number2");
const calculateButton = document.querySelector("#calculateButton");
const heading = document.querySelector(".form-container h1");

/*
console.log(number1TxtBox);
console.log(number2TxtBox);
console.log(calculateButton);
*/


calculateButton.addEventListener("click",()=>{

    alert("Hey you clicked me");
    alert("YAAAAY")

});


calculateButton.addEventListener("mouseover",displayMessge)
heading.addEventListener("mouseover",displayMessge);



