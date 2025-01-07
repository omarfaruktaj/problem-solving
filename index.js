// Problems 1 : Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Riya", age: 30, gender: "female" },
  { name: "Omar", age: 25, gender: "male" },
  { name: "Hossin", age: 35, gender: "male" },
  { name: "Sanjida", age: 28, gender: "female" },
];

const filterOutFemalesAndReturnNames = (people) => {
  const mailes = people.filter((person) => person.gender !== "female");

  return mailes.map((mail) => mail.name);
};

// Problem 2: Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
];

function getBookTitles(books) {
  return books.map((book) => book.title);
}

// Problem 3: Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num) => {
  return num * num;
};

const double = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const compose = (num) => {
  return addFive(double(square(num)));
};

// Problem 4: Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2010 },
  { make: "Ford", model: "Focus", year: 2018 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
