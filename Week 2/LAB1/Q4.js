
console.log("Welcome to the Gross Salary Caluclator\n");

const rate = parseInt(prompt("Enter your hourly rate: "));

const weeklySalary = rate * 40;

const grossSalary = weeklySalary * 52;

const tax = grossSalary * 0.13;

const netSalary = grossSalary - tax;

console.log(`You Earned ${netSalary} in 2020 after taxes.`);