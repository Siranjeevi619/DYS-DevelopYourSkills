import courseModel from "../model/course.models.js";

export const addCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseDescription,
      courseTutor,
      courseLanguage,
      courseDuration,
      courseTags,
      courseTutorIcon,
      courseThumbnail,
      courseDocs,
      courseOutcome,
      courseCertify,
      coursePlayList,
    } = req.body;
    const newCourse = new courseModel({
      courseName,
      courseDescription,
      courseTutor,
      courseLanguage,
      courseDuration,
      courseTags,
      courseTutorIcon,
      courseThumbnail,
      courseDocs,
      courseOutcome,
      courseCertify,
      coursePlayList,
    });
    const addedCourse = await newCourse.save();
    if (!addCourse) {
      return res.status(409).json({ message: "course wont added" });
    }
    return res.status(201).json({
      message: "new course add to db",
      course: addedCourse,
    });
  } catch (e) {
    console.log("cant add new Course");
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
