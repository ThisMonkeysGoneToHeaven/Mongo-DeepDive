use("mongo-deepdive");

/*
This returns the number of unique departments in the employee table.

We have done grouping by departments, and simply counted the number of groups using the $count command.
*/
db.employees.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$department",
    },
  },
  {
    $count: "uniqueDepartments",
  },
]);

/*
Counting number of employees in each department.

If any operation is to be applied on the 'elements within the group', then it's essential that we do that within the $group {} itself.
*/

db.employees.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$department",
      count: { $sum: 1 },
    },
  },
]);
