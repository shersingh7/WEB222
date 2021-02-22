const rectangle =
{
  width:0,
  lenght:0,

  area()
  {
      return this.width * this.lenght;
  },

  perimeter()
  {
      return 2 * (this.width + this.lenght);
  }
}

noOfRectangles = parseInt(prompt("Enter the number of rectangles: "))



for (let i=0; i<noOfRectangles; i++)
{
  rectangle.width=parseInt(prompt("\nEnter the width of the rectangle: "));
  rectangle.lenght=parseInt(prompt("Enter the lenght of the rectangle: "));   

  console.log(`\nThe area of the rectangle ${i+1} is ${rectangle.area()}`);
  console.log(`The perimeter of the rectangle ${i+1} is ${rectangle.perimeter()}`);
}



