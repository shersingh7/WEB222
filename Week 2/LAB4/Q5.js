const pie = 3.14;

function areaCircle()
{
  const area = pie * r * r;
  console.log(`${area}`);
}

const r = parseInt(prompt("Enter the radius if the circle: "));

areaCircle();