//Assignment 1
const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];

//Part 1
students.forEach((students) => console.log(students.name, students.grade));

//Part 2
const topStudents = students.filter((students) => students.grade > 80);
console.log(topStudents);
const youngStudents = students.filter((students) => students.age <= 21);
console.log(youngStudents);

//Part 3
topStudents.forEach((students) => console.log(students.name));
youngStudents.forEach((students) => console.log(students.name));

//Assignment 2
const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

//Part 1
products.forEach((products) => console.log(products.name, products.price));

const updatedProducts = products.map((products) => {
  return {
    ...products,
    price: products.price * 1.1,
  };
});
updatedProducts.forEach((products) =>
  console.log(products.name, products.price)
);

const categories = [];
products.forEach((products) => {
  if (!categories.includes(products.category)) {
    categories.push(products.category);
  }
});
console.log("Unique Categories:", categories);

//Part 2
const electronics = products.filter(
  (products) => products.category === "Electronics"
);
console.log("Electronics:", electronics);

const expensiveProducts = products.filter((products) => products.price > 300);
console.log("Expensive Products:", expensiveProducts);

const highlyRatedProducts = products.filter(
  (products) => products.rating >= 4.5
);
console.log("Highly Rated Products:", highlyRatedProducts);

//Part 3
highlyRatedProducts.forEach((products) => console.log(products.name));

const affordableElectronics = products.filter(
  (products) => products.category === "Electronics",
  products.price < 1000
);
affordableElectronics.forEach((products) => console.log(products.name));
