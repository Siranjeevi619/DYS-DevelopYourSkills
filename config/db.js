const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected Successfully");
    })
    .catch((e) => {
      console.log(e);
      process.exit(1);
    });
};
