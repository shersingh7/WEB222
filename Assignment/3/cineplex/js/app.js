var i = 1;
const images= ["poster.jpg","fordVSferrari.jpg", "horror.jpg", "bigbond.jpg","sonic.jpg"]

const img  = document.querySelector(".slideShow > img");


      function plusImg(n)
      {
        i+= n;
        img.src=`../images/${images[i]}`;
        if(i >= images.length)
        {
          i=0;
        }
      }

      

const main = ()=>
{
    setInterval(()=>
    {
        img.src=`../images/${images[i]}`;

        i++;
        plusImg(n);
    },5000)

}


main();

// James MOdal

// Get the modal
var modal = document.getElementById("jamesModal");

// Get the button that opens the modal
var btn = document.getElementById("jamesBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("jamesClose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Ford MOdal

// Get the modal
var modal2 = document.getElementById("fordModal");

// Get the button that opens the modal
var btn2 = document.getElementById("fordBtn");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("fordClose")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
