// import express from "express";
const express = require("express");

const app = express();
const PORT = 6969;

app.get("/", (req, res) => {
  res.send("Hello DYS");
});
app.listen(PORT, () => {
  console.log(`the server is currently running at ${PORT}`);
});
