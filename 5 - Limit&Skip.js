use("mongo-deepdive");

/*  
Return the employee with the 4th highest salary
Skip(n) removes the top n element from the sort result
Limit(n) only limits the result to n elemnts.
*/
db.employees
  .find({}, { _id: false, name: true, salary: true })
  .sort({ salary: -1 })
  .skip(3)
  .limit(1);
