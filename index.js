// import express from "express";
import express from "express";
// const { connectDB } = require("./config/db");
import { connectDB } from "./config/db.js";
// const {  courseModel } = require("./model/course.models");
// const { courseRouter } = require("./router/course.router");

import courseRouter from "./router/course.router.js";

const app = express();
const PORT = 6969;

app.use(express.json());
connectDB();

app.use("/", courseRouter);

app.get("/", (req, res) => {
  res.send("Hello DYS");
});
app.listen(PORT, () => {
  console.log(`the server is currently running at ${PORT}`);
});
