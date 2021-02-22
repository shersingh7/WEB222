const marks1 = parseInt(prompt("Enter the first marks: "));
const marks2 = parseInt(prompt("Enter the second marks: "));
const marks3 = parseInt(prompt("Enter the third marks: "));

const totalMarks = marks1 + marks2 + marks3;

if(totalMarks >= 15)
{
  console.log("Pass");
}
else
{
  console.log("Fail");
}