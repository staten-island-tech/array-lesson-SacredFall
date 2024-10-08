//part 1
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name, student.grade));

//part 2
//#1
const topstudents = students
  .filter((student) => student.grade > 80)
  .forEach((student) => console.log(student.name));

//#2
const youngstudents = students
  .filter((student) => student.age <= 21)
  .forEach((student) => console.log(student.name));

//Part 3
//#1
console.log(topstudents);
//#2
console.log(youngstudents);

//----------------------------------------------------------------

const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

products.forEach((x) => console.log(x));
products.forEach((x) => console.log((x.price *= 1.1)));

//part 2

const highlyrated = products.filter((product) => product.rating >= 4.5);

highlyrated.forEach((n) => console.log(n));

products.filter((p) => p.price < 1000).forEach((p) => console.log(p.name));
//part 2
