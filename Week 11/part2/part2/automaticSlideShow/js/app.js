

const main = ()=>
{

    const img  = document.querySelector("img");
    const images= ["hulk.jpg","ironman.jpg","thanos.jpg","blackPanther.jpg","captainMarvel.jpg"]
  
    i = 1;
    setInterval(()=>{


        img.src=`img/${images[i]}`;

        i++

        if(i >= images.length)
        {
          i=0;
        }

     },3000)

}


main();