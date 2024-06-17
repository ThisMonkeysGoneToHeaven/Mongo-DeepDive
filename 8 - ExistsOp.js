use("mongo-deepdive");

db.employees.find({
  isRockstar: {
    $exists: true,
  },
});

// returns ofc, John Lennon
