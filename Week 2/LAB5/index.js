let num=[0], odd=[0], even=[0], j=0;
for (i=0; i<10; i++)
{
  num[i]= parseInt(prompt("Enter the number: "));
}

console.log("Printing in reverse order");

for (i=9; i>=0; i--)
{
  console.log(`${num[i]}`);
}

console.log("Printing the odd");

for (i=0; i<10; i++)
{
  if (num[i] % 2 ==1)
  {
      console.log(`${num[i]}`);
  }
}

console.log("Printing the even numbers");

for (i=0; i<10; i++)
{
  if (num[i] % 2 ==0)
  {
      console.log(`${num[i]}`);
  }
}

