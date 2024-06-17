use("mongo-deepdive");

db.getCollection("employees").insertMany([
  {
    name: "Chandu XCX",
    department: "Marketing",
    age: 32,
    salary: 69000,
  },
  {
    name: "Joe Walsh",
    department: "Human Resources",
    age: 69,
    salary: 50000,
  },
  {
    name: "Ismail Srivastava",
    department: "Engineering",
    age: 25,
    salary: 72000,
  },
  {
    name: "Dave Cobain",
    department: "Engineering",
    age: 38,
    salary: 75000,
  },
  {
    name: "Eddie Lee",
    department: "Marketing",
    age: 35,
    salary: 60000,
  },
  {
    name: "Rohan Banerjee",
    department: "Engineering",
    age: 22,
    salary: 45000,
  },
]);

db.getCollection("departments").insertMany([
  {
    name: "Engineering",
    budget: 1000000,
    headquarters: "Tokyo",
  },
  {
    name: "Human Resources",
    budget: 100000,
    headquarters: "Oslo",
  },
  {
    name: "Marketing",
    budget: 200000,
    headquarters: "Los Angeles",
  },
]);
