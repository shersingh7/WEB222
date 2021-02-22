
const div = document.querySelector("#container");

div.innerHTML = `Favorite Movies of ALL time: `;

const movies=["Titanic","The Matrix", "Avenger:Infinity Wars","Bad Boys II","Black Panther"];

const ol = div.nextElementSibling;


movies.forEach((movie,index)=>{

        ol.innerHTML+=`<li style="text-transform:uppercase">Movie ${index+1}:${movie}</li>`

})