const add = (n1,n2)=> n1+n2;

const number1TxtBox = document.querySelector("#number1");
const number2TxtBox = document.querySelector("#number2");
const calculateButton = document.querySelector("#calculateButton");

const modal = document.querySelector(".modal");

calculateButton.addEventListener("click",()=>{


  const modalContainer = modal.children[0];

  const num1 = parseInt(number1TxtBox.value);
  const num2 = parseInt(number2TxtBox.value);

  modal.classList.remove("hide");
  modalContainer.innerText = `The sum of ${num1} + ${num2} = ${add(num1,num2)}`;
 
  number1TxtBox.value="";
  number2TxtBox.value="";

  number1TxtBox.focus();

});

modal.addEventListener("click",()=>{

    modal.classList.add("hide");
});









