use("mongo-deepdive");

// $in operator
db.employees.find(
  {
    department: {
      $in: ["Engineering", "Marketing"],
    },
  },
  {
    _id: false,
    salary: false,
    age: false,
  }
);

// $nin operator
db.employees.find(
  {
    department: {
      $nin: ["Engineering"],
    },
  },
  {
    _id: false,
    salary: false,
    age: false,
  }
);
