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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

app.use('/images', express.static("public/images/"));

export const upload = multer({ storage: storage });

// app.use('/images')
app.use("/courses", courseRouter);

app.get("/", (req, res) => {
  res.send("Hello DYS");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
