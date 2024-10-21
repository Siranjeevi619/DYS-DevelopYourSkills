import express from "express";
import { connectDB } from "./config/db.js";
import multer from "multer";
import cors from "cors";
import courseRouter from "./router/course.router.js";

const app = express();
const PORT = 6969;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

connectDB();



app.use("/images", express.static("public/img/"));


app.use("/courses", courseRouter);

app.get("/", (req, res) => {
  res.send("Hello DYS");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
