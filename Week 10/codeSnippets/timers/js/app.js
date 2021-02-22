

let value;
const div = document.querySelector("#container");
value= parseInt(div.innerText);


const intervalRef= setInterval(()=>{

    value--;

    div.innerText = value;

    if(value<=0)
    {
        clearInterval(intervalRef)
    }
   

},1000);

console.log(value);


/*
setInterval(()=>{

    console.log("SetInterval Function");
},2000);



setTimeout(()=>{

    console.log("Set Timeout");
},2000);

*/