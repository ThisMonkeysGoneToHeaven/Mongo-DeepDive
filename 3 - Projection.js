use("mongo-deepdive");

/*
First argument is for 'match' queries, it returns the complete document for mentioned matches unless further requirements are mentioned in projection.

Second argument is for projection queries. _id will always be returned unless, explicitly marked as false
*/
db.employees.find(
  {},
  {
    _id: false,
    name: true,
    department: true,
  }
);
