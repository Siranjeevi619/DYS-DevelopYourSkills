import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading('Contacting DYS Team...');
    try {
      await emailjs.send(
        "service_558uk9d",
        "template_cwb73kh",
        formData,
        "mfdmgMyD2tOCoVBCq"
      );

      setFormData({ name: "", email: "", message: "" });
      toast.success('Mail sent successfully!', { id: toastId });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error('Temporary unavailable.', { id: toastId });
    }
  };

  return (
    <div className="py-4" id="Contact">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{
        success: {
          style: {
            background: 'green',
            color:'white'
          },
        },
        error: {
          style: {
            background: 'red',
            color:'white'
          },
        },
      }} />
      <div className="container">
        <h3 className="h1 text-center mb-4">Contact</h3>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8">
              <div className="card">
                <div className="p-3 p-md-4">
                  <div className="h2 mt-4 text-center">Any Queries</div>
                  <form onSubmit={handleSubmit} className="form">
                    <div className="row">
                      <div className="col-12 col-md my-2">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            aria-label="Name"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="name">Name</label>
                        </div>
                      </div>
                      <div className="col-12 col-md my-2">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 mt-3">
                        <div className="form-floating">
                          <textarea
                            className="form-control no-resize"
                            placeholder="Leave a comment here"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ height: "100px" }}
                            required
                          ></textarea>
                          <label htmlFor="message">Send a message</label>
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">
                          Send <i className="bi bi-send-fill"></i>
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
    </div>
  );
}

export default Contact;
