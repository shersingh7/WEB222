
const main=()=>
{

  const box = document.querySelector("#box");

  let position =0;

  document.addEventListener("keydown",(event)=>{


    if(event.key=="ArrowRight")
    {
      position+=10;
       box.style.marginLeft = `${position}px`;
    }

    if(event.key=="ArrowLeft")
    {
      position-=10;
      box.style.marginLeft = `${position}px`;
    }
  })
}

main(); 