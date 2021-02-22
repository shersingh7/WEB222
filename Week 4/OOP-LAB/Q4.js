let parcel =
{
  weight:0,
  id:0,
  fName:0,
  lName:0,

  calCharge()
  {

    if(this.weight < 2.5)
    {
        return this.weight * 3.50; 
    }

    if(this.weight >= 2.5 && this.weight <= 5)
    {
        return this.weight * 2.85; 
    }

    if(this.weight >= 5 && this.weight <= 7)
    {
        return this.weight * 2.45; 
    }

    if(this.weight > 7)
    {
        return this.weight * 3.25; 
    }


  }

}

parcel.weight = parseFloat(prompt("Enter the weight of the parcel: "));
parcel.id = parseInt(prompt("Enter the clerk id: "));
parcel.fName = prompt("Enter your first name: ");
parcel.lName = prompt("Enter your last name: ");

console.log(`\nThe charge for the parcel is: ${parcel.calCharge()}`);
