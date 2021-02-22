console.log("Welcome to Salary Calculator");

const rate = parseInt(prompt("Enter your hourly rate: "));

const share = parseInt(prompt("Enter your monthly share: "));

const totalShare = share * 12

const weeklySalary = rate * 40;

const grossSalary = weeklySalary * 52;

const tax = grossSalary * 0.13

const netSalary = (grossSalary - tax) + totalShare

console.log(`You Earned ${netSalary} in 2020 after taxes.`);
