import { first } from "lodash";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await emailjs.send("service_93g8n2k", "template_iv3gl3f", formData, "TTp-hqMDrUjLyw8wE");
  //     toast.success("Email sent successfully");
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //   }

  //   setForm({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className="my-2 my-md-4">
      <Toaster />
      <div className="container">
        <h1 className="text-center display-5">
          Develop <span className="text-dys">Your</span> Skills
        </h1>
        <div className="row p-1 p-md-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-10">
              <div className="card py-4 w-auto shadow">
                <h1 className="text-center">Contact Us</h1>
                <form className="align-items-center justify-content-center d-flex">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3 w-auto px-2 px-md-0">
                          <input type="text" className="form-control" id="floatingFirstName" onChange={handleChange} value={contactForm.name} placeholder="First Name" />
                          <label htmlFor="floatingFirstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-floating mb-3 w-auto px-2 px-md-0">
                          <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" />
                          <label htmlFor="floatingLastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-floating mb-3 w-auto px-2 px-md-0">
                      <input type="email" className="form-control" id="floatingEmail" onChange={handleChange} value={contactForm.email} placeholder="Email" />
                      <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a comment here" onChange={handleChange} value={contactForm.message} id="floatingTextarea"></textarea>
                      <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <div className="mx-auto">
                      <button type="submit" className="mt-3 btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
