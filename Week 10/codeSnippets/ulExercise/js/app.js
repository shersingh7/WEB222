
const numberofListItems = 2;


const span = document.createElement("span");
span.innerText= "Sample OL";


document.body.prepend(span);

const ol = document.querySelector("ol");

for (let i=1; i <= numberofListItems; i++)
{
    const li = document.createElement("li");

    li.innerText= `List item ${i}`;

    ol.append(li);

}

