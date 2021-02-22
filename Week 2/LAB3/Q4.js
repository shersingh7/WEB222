  let num=[0], pTotal=0;
   var sumOdd=0;

  for (i=0;i<6;i++)
  {
    num[i] = parseInt(prompt("Enter the number: "));

      if(num[i] % 2 === 0)
    {
      pTotal = pTotal + 1;
    } 
    
    if(num[i] % 2 === 1)
    {

      sumOdd = sumOdd + num[i];
    }

  }
   

console.log(`${pTotal}`);
console.log(`${sumOdd}`);