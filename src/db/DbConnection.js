const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
const dbString =
  "mongodb+srv://user-microservice-db:Admin1234@cluster0.5siue.mongodb.net/users?retryWrites=true&w=majority";
mongoose.connect(dbString, (err) => {
  if (!err) {
    console.log("MongoDB Connection Succeeded.........");
  } else {
    console.log("Error in DB connection: " + err);
  }
});
