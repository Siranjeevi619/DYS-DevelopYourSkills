const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["ENROLLED", "COMPLETED"],
      default: "ENROLLED",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enrollment", enrollSchema);
