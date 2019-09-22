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

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// //Routes
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/contacts", contacts);

//

// // Start app on port 3000
app.listen(PORT, (req, res) => {
  console.log("Server Started at PORT ", PORT);
});
