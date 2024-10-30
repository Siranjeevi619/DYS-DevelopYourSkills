import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:6969/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("Login successful:", response.data);
      alert("user validated");
      // Handle successful login (e.g., redirect to dashboard or home page)
    } catch (error) {
      console.error(
        "Error logging in:",
        error.response ? error.response.data : error.message
      );
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit" className="btn btn-primary ">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
