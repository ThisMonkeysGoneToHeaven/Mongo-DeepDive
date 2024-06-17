// it will use the db mentioned below or create a new one it doesn't exist already
use("mongo-deepdive");

// well it does what it says
db.getCollectionNames();

// collection is ready for further operations via chaining
db.getCollection("employees");

// get all the documents from the collection
db.employees.find();

// get all documents from 'employeees' collections where department is 'Engineering'
db.employees.find({ department: "Engineering" });

// update
// delete
