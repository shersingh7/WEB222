const main=()=>
{
    const list = document.querySelector("#location");
    const div = document.querySelector("#container-result");
    
    list.addEventListener("change",()=>{


      const endPoint = `http://api.weatherapi.com/v1/current.json?key=5f5083da5c6540ebaf711416200112&q=${list.value}`
     
      fetch(endPoint)
     .then((response)=>{

        return response.json();
     })
     .then((json)=>{
       
       div.innerHTML
       =`<div>
       The current temperature in ${list.value}  is currently ${json.current.temp_c} 
       <img src="${json.current.condition.icon}" alt="">
       
       </div>`
       
        console.log(json.current.temp_c);
     })
     .catch((err)=>{
        console.log(`Error : ${err}`)
     })

    });

 
}

main(); 