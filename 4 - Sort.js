use("mongo-deepdive");

// db.find() returns a cursor and .sort() builds on top of that
db.employees
  .find({ department: "Engineering" }, { _id: false, name: true, salary: true })
  .sort({ salary: -1 });
