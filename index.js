const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const { error } = require("console");
const { courseModel } = require("./model/courseModel");

const app = express();
const PORT = 6969;

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`the port is currently running at ${PORT}`);
});

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, ceb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
}).single("picture");

app.post("/submit", (req, res) => {
  upload(req, res, async () => {
    if (err) {
      return res
        .status(400)
        .json({ message: "File upload failed", error: err });
    }
    if (!req.file) {
      return res.status(400).json({ message: "No file selected" });
    }

    const {
      courseName,
      courseDescription,
      tutorName,
      courseLanguage,
      courseDuration,
      courseTags,
      courseCertification,
      courseDocuments,
      courseOutcomes,

    } = req.body;

    const courseTutorIconPath = `/uploads/${req.file.fileName}`;
    const courseThumbnailPath = `/uploads/${req.file.fileName}`;
    try {
      const newCourse = new courseModel({
        courseName,
        courseDescription,
        tutorName,
        courseLanguage,
        courseDuration,
        courseTags,
        courseCertification,
        courseDocuments,
        courseOutcomes,
        courseTutorIcon: courseTutorIconPath,
        courseThumbnail: courseThumbnailPath,
      });
      await newCourse.save();
      return res.status(201).json({
        message: "new Course created",
      });
    } catch (error) {
      return res.status(500).json({
        message: "error in adding course",
      });
    }
  });
});
