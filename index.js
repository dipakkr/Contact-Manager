const express = require("express");
const users = require("./routes/user");
const auth = require("./routes/auth");
const contacts = require("./routes/contacts");
const connectDB = require("./config/db");
const cors = require("cors");

//Initiate DB
connectDB();

//App
const app = express();
const PORT = 5000;

//Middleware
app.use(express.json({ extended: false }));

//enables cors
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false
  })
);

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

// // Start app on port 3001
app.listen(PORT, (req, res) => {
  console.log("Server Started at PORT ", PORT);
});
