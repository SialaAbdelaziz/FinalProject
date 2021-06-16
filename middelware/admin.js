const User = require("../models/User");

module.exports = function (req, res, next) {
  if ((User.roleType = "User")) {
    return res.status(400).json({ msg: "Admin authorization requierd" });
  }
  next();
};
