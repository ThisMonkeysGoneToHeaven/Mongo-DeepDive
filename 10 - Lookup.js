use("mongo-deepdive");

// show all employees names with their departments and department headquarters

db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department",
      foreignField: "name",
      as: "departmentInfo",
    },
  },
  {
    $project: {
      name: 1,
      _id: 0,
      departmentInfo: {
        name: 1,
        headquarters: 1,
      },
    },
  },
]);
