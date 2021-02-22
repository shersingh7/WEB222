const age = parseInt(prompt("Enter your age: "));

if (age <= 18)
{
  if (age < 16)
  {
    console.log("\nYou must stop here!");
  }
  else
  {
      console.log("\naccess denied!");
  }
}
