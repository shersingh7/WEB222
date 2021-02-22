

const main = ()=>
{

  const h2 = document.querySelector("h2");
  const img = document.querySelector("img");


  img.addEventListener("mouseover",()=>{
    
    img.src="img/thanos.jpg";
    img.alt="Thanos";

    h2.innerText = "Thanos"

  });

  
  img.addEventListener("mouseout",()=>{
    
    img.src="img/hulk.jpg";
    img.alt="Hulk";

    h2.innerText="Hulk"
     
  });


}


main();