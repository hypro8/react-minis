const staff = [
  { name: "bob", age: 20, position: "developer", salary: 100 },
  { name: "peter", age: 25, position: "designer", salary: 300 },
  { name: "susy", age: 30, position: "boss", salary: 400 },
  { name: "anna", age: 35, position: "intern", salary: 50 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total);
  return total;
}, 0);

console.log(dailyTotal);
