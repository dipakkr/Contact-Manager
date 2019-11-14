const express = require("express");
const users = require("./routes/user");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");

//Initiate DB
connectDB();

//App
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API WORKING");
});

function Logger(req, res, next) {
  console.log(req.method + " - " + req.url);
  next();
}

//Logging Middleware
app.use(Logger);

// //Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

// // Start app on port 3000
app.listen(PORT, (req, res) => {
  console.log("Server Started at PORT ", PORT);
});
