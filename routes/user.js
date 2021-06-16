// const express = require("express");
// const router = express.Router();
// const { check, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");

// const User = require("../../models/User");

// router.post(
//   "/user",
//   [
//     check("name", "Name is requierd").not().isEmpty(),
//     check("email", "please enter a valid email").isEmail(),
//     check("password", "Password should be 4 or more characters").isLength({
//       min: 4,
//     }),
//   ],

//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { name, email, password } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) {
//         res.status(400).json({ errors: [{ msg: "User already exists" }] });
//       }
//       user = new User({
//         name,
//         email,
//         password,
//       });
//       const salt = await bcrypt.genSalt(10);
//       user.password = await bcrypt.hash(password, salt);
//       user.save();

//       const payload = {
//         user: {
//           id: user.id,
//         },
//       };

//       jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       });
//     } catch (error) {
//       console.error(object);
//       res.status(500).send("server error");
//     }
//   }
// );

// module.exports = router;
