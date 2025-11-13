const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Enroll DB Connected");
  } catch (err) {
    console.log("DB error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
