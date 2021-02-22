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

rectangle.width=parseInt(prompt("Enter the width of the rectangle: "));
rectangle.lenght=parseInt(prompt("Enter the lenght of the rectangle: "));

console.log(`The area of the rectangle is ${rectangle.area()}`);
console.log(`The perimeter of the rectangle is ${rectangle.perimeter()}`);
