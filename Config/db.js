const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    const con = await mongoose
      .connect("mongodb://localhost:27017/developyourskills", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connected successfully");
      })
      .catch((e) => {
        console.log("error in db connection");
      });
  } catch (e) {
    console.log(e.message);
  }
};
