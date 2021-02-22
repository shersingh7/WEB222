const generateTaskHTML = (txtBox, listContainer)=>{

    listContainer.innerHTML += 
    
    `<div> ${txtBox.value} <button type="button"> Delete Task </button></div>`;

    txtBox.value ="";
    txtBox.focus();
}



const main=()=>
{
    const txtTaskBox = document.querySelector("#txtTask");
    const addTaskButton = document.querySelector("#taskButton");

    const taskListContainer = document.querySelector("#taskListContainer");


    addTaskButton.addEventListener("click",()=>{

        generateTaskHTML(txtTaskBox,taskListContainer);
       
    });



    taskListContainer.addEventListener("click",(event)=>{


        const  element  = event.target;

        if(element.tagName == "BUTTON")
        {
            element.parentElement.remove();
        }
    })


 
}

main(); 