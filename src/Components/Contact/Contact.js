import { Button } from "@mui/material";
import React from "react";
import { SendI } from "@mui/icons-material";
function Contact() {
  return (
    <div className="container">
      <div className="row p-1 p-md-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-10">
            <div className="card py-4 w-auto shadow">
              <h1 className="text-center">Contact Us</h1>
              <form className="align-items-center justify-content-center d-flex">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div class="form-floating mb-3 w-auto px-2 px-md-0">
                        <input type="text" class="form-control" id="floatingInput " placeholder="name" />
                        <label for="floatingInput">First Name</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div class="form-floating mb-3 w-auto px-2 px-md-0">
                        <input type="text" class="form-control" id="floatingInput " placeholder="name" />
                        <label for="floatingInput">Last Name</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3 w-auto px-2 px-md-0">
                    <input type="email" class="form-control" id="floatingInput " placeholder="name" />
                    <label for="floatingInput">Email</label>
                  </div>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Comments</label>
                  </div>
                  <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
