const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Mongo Connected !!"))
    .catch(() => console.log("Connection Error !"));
};

module.exports = connectDB;
