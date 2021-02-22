
const calculateSum = (n1,n2)=> n1+n2;


const isValidated = (fields, errors)=>{


    let isValidated = true;



    //validation

    if(fields[0].value == "")
    {
        errors[0].innerText = 'Sorry, you must enter a number';

        isValidated = false;
    }
    else
    {
        //want to check to see if the value is a number of not
       if( isNaN(fields[0].value))
       {
           
            isValidated=false;
            errors[0].innerText = 'Sorry,you did not enter a valid number';
       }

       else
       {
        errors[0].innerText = "";
       }
      
    }

    if(fields[1].value =="")
    {
        errors[1].innerText= 'Sorry, you must enter a number';

        isValidated=false;
    }
    else
    {
        if(isNaN(fields[1].value))
        {
            
            isValidated=false;
             errors[1].innerText = 'Sorry,you did not enter a valid number';
        }
        else
        {
            errors[1].innerText = "";
        }
    }


    return isValidated;


}


const dispalayAnswer = (modal,textFields)=>{

    const num1 = textFields[0].value;
    const num2 = textFields[1].value;

    modal.classList.remove("hide");
    modal.children[0].innerText= `The sum of ${num1} + ${num2} = ${calculateSum(num1,num2)}`;

    textFields.forEach(textField=>{

        textField.value="";
    })


}


const hideModal = (modal)=>{

    modal.classList.add("hide");
}



const main = ()=>
{
        //entry point function (Adds organization of cdoe from  a readablity perspective)


    //REFERENCING DOM ELEMENTS TO BE MANIPULATED    

    const textFields = document.querySelectorAll(".form-control > input[type=text]");
    const errorContainers = document.querySelectorAll(".form-control > .error-fields");

    const calculateButton = document.querySelector("#calculateButton");
    const modal = document.querySelector(".modal");


    //EVENT LISTENERS

    calculateButton.addEventListener("click",()=>{

        const val = isValidated(textFields, errorContainers);

        if(val==true)
        {
                dispalayAnswer(modal,textFields);
        }
      
    });
      
    modal.addEventListener("click",()=>{
        
        hideModal(modal);
          
      });


}

main();