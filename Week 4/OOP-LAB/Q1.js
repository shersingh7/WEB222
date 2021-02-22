
const PIE=3.14;

let circle =
{
  r:0,

  area()
  {
      return PIE*this.r*this.r;
  },

  circumference()
  {
      return 2 * PIE * this.r;
  }
}
circle.r = parseInt(prompt("Enter the radius of the circle: "));



console.log(`The Area of the circle is ${circle.area()}`);
console.log(`The circumference of the circle is ${circle.circumference()}`);
