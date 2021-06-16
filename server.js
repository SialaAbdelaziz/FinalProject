const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
connectDB();

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// const dbURI = config.get("dbURI");
// const PORT = process.env.PORT || 5000;
// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err
    ? console.log("Server Error", err)
    : console.log(`Server is running on PORT ${PORT}`)
);
