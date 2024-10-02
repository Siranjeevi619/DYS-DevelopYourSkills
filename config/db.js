import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/developyourskills", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connect Successfully");
      })
      .catch((e) => {
        console.log(e.message);
        console.log("error in connecting db with uri");
      });
  } catch (e) {
    console.log(e.message);
  }
};
