require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/user.route");
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () =>
  console.log(`Auth Service running on port ${process.env.PORT}`)
);
