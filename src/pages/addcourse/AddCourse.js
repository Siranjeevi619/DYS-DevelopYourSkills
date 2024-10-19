import React, { useState, useEffect } from "react";
import { Chip, TextField, Button } from "@mui/material";
import axios from "axios";
// import axios from "axios";

function AddCourse() {
  const [inputCourseTag, setInputCourseTag] = useState("");
  const [tags, setTags] = useState([]);

  const [inputCoursePlaylist, setInputCoursePlaylist] = useState("");
  const [playlists, setPlaylists] = useState([]);

  const [inputCourseCertification, setInputCourseCertification] = useState("");
  const [certification, setCertification] = useState([]);

  const [inputCourseDocuments, setInputCourseDocuments] = useState("");
  const [documents, setDocuments] = useState([]);

  const [inputCourseOutcome, setInputCourseOutcome] = useState("");
  const [outcomes, setOutcomes] = useState([]);

  const [inputVideoTitle, setInputVideoTitle] = useState("");
  const [inputVideoLink, setInputVideoLink] = useState("");

  const [addCourse, setAddCourse] = useState({
    courseName: "",
    courseDescription: "",
    courseTutor: "",
    courseLanguage: "",
    courseDuration: "",
    courseTags: [],
    courseTutorIcon: "",
    courseThumbnail: "",
    courseDocs: [],
    courseOutcome: [],
    courseCertify: [],
    coursePlayList: [],
  });

  // Update addCourse state whenever dependent states change
  useEffect(() => {
    setAddCourse((prev) => ({ ...prev, courseTags: tags }));
  }, [tags]);

  useEffect(() => {
    setAddCourse((prev) => ({ ...prev, coursePlayList: playlists }));
  }, [playlists]);

  useEffect(() => {
    setAddCourse((prev) => ({ ...prev, courseCertify: certification }));
  }, [certification]);

  useEffect(() => {
    setAddCourse((prev) => ({ ...prev, courseDocs: documents }));
  }, [documents]);

  useEffect(() => {
    setAddCourse((prev) => ({ ...prev, courseOutcome: outcomes }));
  }, [outcomes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddCourse({ ...addCourse, [name]: value });
  };

  const handleTagInput = (e) => {
    if (e.key === " ") {
      if (inputCourseTag.trim() !== "") {
        setTags([...tags, inputCourseTag.trim()]);
        setInputCourseTag("");
      }
    }
  };

  const handleCertificationInput = (e) => {
    if (e.key === " ") {
      if (inputCourseCertification.trim() !== "") {
        setCertification([...certification, inputCourseCertification.trim()]);
        setInputCourseCertification("");
      }
    }
  };

  const handleDocumentInput = (e) => {
    if (e.key === " ") {
      if (inputCourseDocuments.trim() !== "") {
        setDocuments([...documents, inputCourseDocuments.trim()]);
        setInputCourseDocuments("");
      }
    }
  };

  const handleOutcomeInput = (e) => {
    if (e.key === " ") {
      if (inputCourseOutcome.trim() !== "") {
        setOutcomes([...outcomes, inputCourseOutcome.trim()]);
        setInputCourseOutcome("");
      }
    }
  };

  const handleVideoInput = (e) => {
    if (e.key === "Enter") {
      if (inputVideoTitle.trim() !== "" && inputVideoLink.trim() !== "") {
        setPlaylists([
          ...playlists,
          { title: inputVideoTitle, link: inputVideoLink },
        ]);
        setInputVideoTitle("");
        setInputVideoLink("");
      }
    }
  };

  const handleCourseTutorIcon = (e) => {
    setAddCourse({ ...addCourse, courseTutorIcon: e.target.files[0] });
  };

  const handleCourseThumbnail = (e) => {
    setAddCourse({ ...addCourse, courseThumbnail: e.target.files[0] });
  };

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleCertificationDelete = (certificationToDelete) => {
    setCertification(
      certification.filter((cert) => cert !== certificationToDelete)
    );
  };

  const handleDocumentDelete = (docsToDelete) => {
    setDocuments(documents.filter((doc) => doc !== docsToDelete));
  };

  const handleOutcomeDelete = (outcomeToDelete) => {
    setOutcomes(outcomes.filter((outcome) => outcome !== outcomeToDelete));
  };

  const handlePlaylistDelete = (playlistToDelete) => {
    setPlaylists(
      playlists.filter((playlist) => playlist.title !== playlistToDelete.title)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const data = new FormData();
    const data = new FormData();

    data.append("courseName", addCourse.courseName);
    data.append("courseDescription", addCourse.courseDescription);
    data.append("courseTutor", addCourse.courseTutor);
    data.append("courseLanguage", addCourse.courseLanguage);
    data.append("courseDuration", addCourse.courseDuration);
    data.append("courseTutorIcon", addCourse.courseTutorIcon);
    data.append("courseThumbnail", addCourse.courseThumbnail);
    data.append("courseTags", JSON.stringify(addCourse.courseTags));
    data.append("courseDocs", JSON.stringify(addCourse.courseDocs));
    data.append("courseOutcome", JSON.stringify(addCourse.courseOutcome));
    data.append("courseCertify", JSON.stringify(addCourse.courseCertify));
    data.append("coursePlayList", JSON.stringify(addCourse.coursePlayList));
    console.log(addCourse);
    console.log(data);

    try {
      const response = await axios.post(
        "http://localhost:6969/courses/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.status);

      if (response.status === 201) {
        console.log("data submitted successfully");
      } else {
        console.log("error in submitting error");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response) {
        console.error("Error Status:", error.response.status);
        console.error("Error Data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="container my-5 my-md-3">
      <h2 className="text-center">Add New Course</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="row justify-content-center"
      >
        <div className="col-12 col-md-6">
          {/* Course Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="courseName"
              name="courseName"
              value={addCourse.courseName}
              onChange={handleInputChange}
              placeholder="Course Name"
              required
            />
            <label htmlFor="courseName">Course Name</label>
          </div>

          {/* Course Description */}
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder="Course Description"
              id="courseDescription"
              name="courseDescription"
              value={addCourse.courseDescription}
              onChange={handleInputChange}
              required
            ></textarea>
            <label htmlFor="courseDescription">Course Description</label>
          </div>

          {/* Tutor Name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="courseTutor"
              name="courseTutor"
              value={addCourse.courseTutor}
              onChange={handleInputChange}
              placeholder="Tutor Name"
              required
            />
            <label htmlFor="courseTutor">Tutor Name</label>
          </div>

          {/* Course Language */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="courseLanguage"
              name="courseLanguage"
              value={addCourse.courseLanguage}
              onChange={handleInputChange}
              placeholder="Course Language"
              required
            />
            <label htmlFor="courseLanguage">Course Language</label>
          </div>

          {/* Course Duration */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="courseDuration"
              name="courseDuration"
              value={addCourse.courseDuration}
              onChange={handleInputChange}
              placeholder="Course Duration"
              required
            />
            <label htmlFor="courseDuration">Course Duration</label>
          </div>

          {/* Course Tutor Icon */}
          <div className="mb-3">
            <label htmlFor="courseTutorIcon" className="form-label">
              Course Tutor Icon
            </label>
            <input
              type="file"
              className="form-control"
              id="courseTutorIcon"
              onChange={handleCourseTutorIcon}
              required
            />
          </div>

          {/* Course Thumbnail */}
          <div className="mb-3">
            <label htmlFor="courseThumbnail" className="form-label">
              Course Thumbnail
            </label>
            <input
              type="file"
              className="form-control"
              id="courseThumbnail"
              onChange={handleCourseThumbnail}
              required
            />
          </div>

          {/* Tags Input */}
          <TextField
            value={inputCourseTag}
            onKeyDown={handleTagInput}
            onChange={(e) => setInputCourseTag(e.target.value)}
            label="Add Tags (press space)"
            fullWidth
          />
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              onDelete={() => handleTagDelete(tag)}
              style={{ margin: "5px" }}
            />
          ))}

          {/* Playlist Input */}
          <TextField
            value={inputVideoTitle}
            onKeyPress={handleVideoInput}
            onChange={(e) => setInputVideoTitle(e.target.value)}
            label="Video Title"
            fullWidth
            className="mb-3"
          />
          <TextField
            value={inputVideoLink}
            onKeyPress={handleVideoInput}
            onChange={(e) => setInputVideoLink(e.target.value)}
            label="Video Link"
            fullWidth
            className="mb-3"
          />
          {playlists.map((playlist, index) => (
            <Chip
              key={index}
              label={`${playlist.title} (${playlist.link})`}
              onDelete={() => handlePlaylistDelete(playlist)}
              style={{ margin: "5px" }}
            />
          ))}

          {/* Certification Input */}
          <TextField
            value={inputCourseCertification}
            onKeyDown={handleCertificationInput}
            onChange={(e) => setInputCourseCertification(e.target.value)}
            label="Certifications (press space)"
            fullWidth
          />
          {certification.map((cert, index) => (
            <Chip
              key={index}
              label={cert}
              onDelete={() => handleCertificationDelete(cert)}
              style={{ margin: "5px" }}
            />
          ))}

          {/* Documents Input */}
          <TextField
            value={inputCourseDocuments}
            onKeyDown={handleDocumentInput}
            onChange={(e) => setInputCourseDocuments(e.target.value)}
            label="Documents (press space)"
            fullWidth
          />
          {documents.map((doc, index) => (
            <Chip
              key={index}
              label={doc}
              onDelete={() => handleDocumentDelete(doc)}
              style={{ margin: "5px" }}
            />
          ))}

          {/* Outcomes Input */}
          <TextField
            value={inputCourseOutcome}
            onKeyDown={handleOutcomeInput}
            onChange={(e) => setInputCourseOutcome(e.target.value)}
            label="Outcomes (press space)"
            fullWidth
          />
          {outcomes.map((outcome, index) => (
            <Chip
              key={index}
              label={outcome}
              onDelete={() => handleOutcomeDelete(outcome)}
              style={{ margin: "5px" }}
            />
          ))}
        </div>
        <button className="btn border-primary bg-primary-subtle">submit</button>
      </form>
    </div>
  );
}

export default AddCourse;
