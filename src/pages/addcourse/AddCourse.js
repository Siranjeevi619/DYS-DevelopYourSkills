import React, { useState } from "react";
import { Chip, TextField, Button } from "@mui/material";
import axios from "axios";

function AddCourse() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseTutor, setCourseTutor] = useState("");
  const [courseLanguage, setCourseLanguage] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseTutorIcon, setCourseTutorIcon] = useState(null);
  const [courseThumbnail, setCourseThumbnail] = useState(null);

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
    setCourseTutorIcon(e.target.files[0]);
  };

  const handleCourseThumbnail = (e) => {
    setCourseThumbnail(e.target.files[0]);
  };

  const handleTagDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const handleCertificationDelete = (certToDelete) => {
    setCertification(certification.filter((cert) => cert !== certToDelete));
  };

  const handleDocumentDelete = (docToDelete) => {
    setDocuments(documents.filter((doc) => doc !== docToDelete));
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
    const data = new FormData();

    data.append("courseName", courseName);
    data.append("courseDescription", courseDescription);
    data.append("courseTutor", courseTutor);
    data.append("courseLanguage", courseLanguage);
    data.append("courseDuration", courseDuration);
    data.append("courseTutorIcon", courseTutorIcon);
    data.append("courseThumbnail", courseThumbnail);
    data.append("courseTags", JSON.stringify(tags));
    data.append("courseDocs", JSON.stringify(documents));
    data.append("courseOutcome", JSON.stringify(outcomes));
    data.append("courseCertify", JSON.stringify(certification));
    data.append("coursePlayList", JSON.stringify(playlists));

    console.log(playlists);
    console.log(courseTutorIcon);
    console.log(courseThumbnail);

    try {
      const response = await axios.post(
        "http://localhost:6969/submit/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        console.log("data submitted successfully");
      } else {
        console.log("error in submitting");
      }
    } catch (error) {
      console.error("Error:", error.message);
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
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
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
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
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
              value={courseTutor}
              onChange={(e) => setCourseTutor(e.target.value)}
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
              value={courseLanguage}
              onChange={(e) => setCourseLanguage(e.target.value)}
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
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
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
          <div className="mb-3">
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
          </div>

          {/* Playlist Input */}
          <div className="mb-3">
            <TextField
              value={inputVideoTitle}
              onKeyPress={handleVideoInput}
              onChange={(e) => setInputVideoTitle(e.target.value)}
              label="Add Video Title"
              fullWidth
            />
            <TextField
              value={inputVideoLink}
              onKeyPress={handleVideoInput}
              onChange={(e) => setInputVideoLink(e.target.value)}
              label="Add Video Link"
              fullWidth
              style={{ marginTop: "10px" }}
            />
            {playlists.map((playlist, index) => (
              <Chip
                key={index}
                label={`${playlist.title} (${playlist.link})`}
                onDelete={() => handlePlaylistDelete(playlist)}
                style={{ margin: "5px" }}
              />
            ))}
          </div>

          {/* Certification Input */}
          <div className="mb-3">
            <TextField
              value={inputCourseCertification}
              onKeyDown={handleCertificationInput}
              onChange={(e) => setInputCourseCertification(e.target.value)}
              label="Add Certifications (press space)"
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
          </div>

          {/* Documents Input */}
          <div className="mb-3">
            <TextField
              value={inputCourseDocuments}
              onKeyDown={handleDocumentInput}
              onChange={(e) => setInputCourseDocuments(e.target.value)}
              label="Add Documents (press space)"
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
          </div>

          {/* Outcomes Input */}
          <div className="mb-3">
            <TextField
              value={inputCourseOutcome}
              onKeyDown={handleOutcomeInput}
              onChange={(e) => setInputCourseOutcome(e.target.value)}
              label="Add Outcomes (press space)"
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

          {/* Submit Button */}
          <div className="d-grid">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="my-3"
            >
              Add Course
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
