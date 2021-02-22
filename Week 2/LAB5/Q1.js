let sum=0, num=[0];
for (i=0; i<10; i++)
{
  num[i]= parseInt(prompt("Enter the number: "));

  sum+= num[i];  
}


function print()
{
console.log(`${sum}`);
}

print();