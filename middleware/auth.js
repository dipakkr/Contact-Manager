const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) return res.status(401).json({ message: "Not Authorised" });

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(500).send("Token is not valid");
  }
};
