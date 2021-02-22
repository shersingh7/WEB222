function cube()
{
  const c = num ** 3;
  return c;
}

const num = parseInt(prompt("Enter the number: "));
console.log(`${cube()}`);