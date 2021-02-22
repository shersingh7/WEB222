  let num=[], sumOdd=0;
 
   for (i=0;i<6;i++)
  {
    num[i] = parseInt(prompt("Enter the number: "));
    if(!(num[i] % 2 === 0))
    {
      sumOdd += num[i];
    }
  }

  let average = sumOdd/6
  console.log(`${average}`);