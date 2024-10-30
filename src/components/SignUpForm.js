import axios from "axios";
import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    DOB: "",
    userPassword: "",
    domain: "",
    education: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const data = new FormData();
    data.append("userData", formData);

    try {
      const userSignUpResponse = async () => {
        await axios.post("http://localhost:6969/user/signin", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      };
      const response = userSignUpResponse();
      console.log(response)
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DOB" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="DOB"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                name="userPassword"
                value={formData.userPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="domain" className="form-label">
                Domain
              </label>
              <input
                type="text"
                className="form-control"
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="education" className="form-label">
                Education
              </label>
              <input
                type="text"
                className="form-control"
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
