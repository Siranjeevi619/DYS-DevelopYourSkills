import courseModel from "../model/course.models.js";
import fileUpload from "express-fileupload";


export const addCourse = async (req, res) => {
  try {
    if (
      !req.files ||
      !req.files["courseTutorIcon"] ||
      !req.files["courseThumbnail"]
    ) {
      return res.status(400).json({ message: "Required files not uploaded" });
    }

    const {
      courseName,
      courseDescription,
      courseTutor,
      courseLanguage,
      courseDuration,
      courseTags,
      courseOutcome,
      courseCertify,
      coursePlayList,
      courseDocs,
    } = req.body;

    const parsedFields = (field) =>
      Array.isArray(field) ? field : JSON.parse(field);
    const parsedCourseTags = parsedFields(courseTags);
    const parsedCourseOutcome = parsedFields(courseOutcome);
    const parsedCourseCertify = parsedFields(courseCertify);
    const parsedCoursePlayList = parsedFields(coursePlayList).map((video) => ({
      title: video.title,
      link: video.link,
    }));
    const parsedCourseDocs = parsedFields(courseDocs);

    // Get uploaded file names
    const courseTutorIcon = req.files["courseTutorIcon"][0].filename;
    const courseThumbnail = req.files["courseThumbnail"][0].filename;

    // Create new course
    const newCourse = new courseModel({
      courseName,
      courseDescription,
      courseTutor,
      courseLanguage,
      courseDuration,
      courseTags: parsedCourseTags,
      courseTutorIcon,
      courseThumbnail,
      courseDocs: parsedCourseDocs,
      courseOutcome: parsedCourseOutcome,
      courseCertify: parsedCourseCertify,
      coursePlayList: parsedCoursePlayList,
    });

    // Save course to DB
    const addedCourse = await newCourse.save();
    return res
      .status(201)
      .json({ message: "New course added", course: addedCourse });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

  export const updateCourse = async (req, res) => {
    try {
      const courseToUpdate = req.body.courseId;
      console.log(courseToUpdate);
      console.log(courseToUpdate);
      if (!courseToUpdate) {
        return res.status(400).json({ message: "courseId is required" });
      }
      const updatedCourse = await courseModel.findOneAndUpdate(
        { courseId: courseToUpdate },
        {
          courseName: req.body.courseName,
          courseDescription: req.body.courseDescription,
          courseTutor: req.body.courseTutor,
          courseLanguage: req.body.courseLanguage,
          courseDuration: req.body.courseDuration,
          courseTags: req.body.courseTags,
          courseTutorIcon: req.body.courseTutor,
          courseThumbnail: req.body.courseThumbnail,
          courseDocs: req.body.courseDocs,
          courseOutcome: req.body.courseOutcome,
          courseCertify: req.body.courseCertify,
          coursePlayList: req.body.coursePlayList,
        },
        {
          new: true,
        }
      );
      if (!updatedCourse) {
        return res.status(404).json({ message: "cannot update course" });
      }

      return res
        .status(200)
        .json({ message: "course updated successfully", updatedCourse });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  export const readCourse = async (req, res) => {
    try {
      const readCourse = await courseModel.find();
      console.log(readCourse);

      if (readCourse.length === 0) {
        console.log("no course available right now");
        return res.status(404).json({ message: e.message });
      }
      return res.status(200).json({ readCourse });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  export const deleteCourse = async (req, res) => {
    try {
      const courseToDelete = req.body.courseId;
      if (!courseToDelete) {
        return res.status(404).json({ message: "the course cannot be found" });
      }
      const deleteCourse = await courseModel.findOneAndDelete(courseToDelete);
      if (!deleteCourse) {
        return res.status(400).json({ message: "connection in error " });
      }
      return res.status(200).json({ message: "course removed successfully" });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  export const findCourseByName = async (req, res) => {
    try {
      const courseToUpdate = req.params.courseName;
      if (!courseToUpdate) {
        return res.status(404).json({ message: "cannot find course by name" });
      }
      const regex = new RegExp("^" + courseToUpdate, "i");

      const courseToFindByName = await courseModel.find({
        courseName: regex,
      });

      if (!courseToFindByName) {
        return res.status(404).json({ message: "cannot find course" });
      }
      return res.status(200).json({
        message: "course found successfully",
        course: courseToFindByName,
      });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ message: e.message });
    }
  };
