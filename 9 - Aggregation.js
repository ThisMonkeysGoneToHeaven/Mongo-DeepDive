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
1. Counting number of employees per department
2. Total salary per department.
3. Average salary per department.
4. Maximum and minimum salary per department.

If any operation is to be applied on the 'elements within the group', then it's essential that we do that within the $group {} itself.
*/

db.employees.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$department",
      numberOfEmployees: { $sum: 1 },
      totalSalary: { $sum: "$salary" },
      averageSalary: { $avg: "$salary" },
      maximumSalary: { $max: "$salary" },
      minimumSalary: { $min: "$salary" },
    },
  },
]);

/*
Department with most employees along with the number of employees. 

This one's rather interesting because we have to find the maximum 'attribute' for a group, but this attribute in itself will have to be derived first.
*/

db.employees.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$department",
      numberOfEmployees: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      $numberOfEmployees: -1,
    },
  },
  { $limit: 1 },
]);

/*
All Employees names grouped by their departments.

Since we want all the employees in a department to be listed together, we must do the $push operation within the $group.
*/

db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      employees: {
        $push: "$name",
      },
    },
  },
]);
