use("mongo-deepdive");

// using the $and operator and the $gt operator, self explanatory and easily intuitive
db.employees.find({
  $and: [
    {
      department: "Engineering",
    },
    {
      age: {
        $gt: 25,
      },
    },
  ],
});

// OR operator usage
db.employees.find({
  $or: [
    {
      department: "Human Resources",
    },
    {
      age: {
        $lte: 25,
      },
    },
  ],
});

// NOT operator usage
db.employees.find({
  department: {
    $not: {
      $eq: "Engineering",
    },
  },
});
