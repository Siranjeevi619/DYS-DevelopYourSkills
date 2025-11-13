const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const courseRoute = require("./routers/course.route");
require("dotenv").config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/course", courseRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
