function hideModal() 
{
    const orderProblem = document.querySelector(".order-problem");
    const problem = document.querySelector("#orderProblem");
    
    problem.addEventListener("click", ()=> {
        
        orderProblem.classList.remove("hide");
    
    })
}

function isValidated(fields, errors)
{

    let validation = true;

    if(fields[0].value=="" || fields[0].value == null)
    {
        errors[0].innerText = 'Sorry, you must enter a name';
        validation = false;
    }

    if(fields[1].value=="" || fields[1].value == null)
    {
        errors[1].innerText = 'Sorry, you must enter an email address';
        validation = false;
    }
   
    if(fields[2].value=="" || fields[2].value == null)
    {
        errors[2].innerText = 'Sorry, you must enter an address';
        validation = false;
    }

    if(fields[3].value=="" || fields[3].value == null)
    {
        errors[3].innerText = 'Sorry, you must enter a postal code';
        validation = false;
    }

    return validation;
}

function submmision()
{
    alert("Form Submitted");
}


function main()
{

    const formControl = document.querySelectorAll(".contactUs > input[type=text]");  
    const errorFields = document.querySelectorAll(".contactUs > .showError")
    const submitBtn = document.querySelector(".submitBtn");

    hideModal();
    
    submitBtn.addEventListener("click", ()=>{

        if(isValidated(formControl, errorFields))
        {
            submmision();
        }
    });

}

main();