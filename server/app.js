/** @format */

const express = require("express");
const app = express();
const port = 4000;
const contentRoutes = require("./src/routes/contentRoutes");
const mongoose = require("mongoose");
const generateReactPage = require("./generate/react/index");
const fs = require("fs");
const path = require("path");

// mongoose.connect(
//   "mongodb://localhost:27017/ui?retryWrite=true&w=majority",
//   (err) => {
//     if (err) throw err;
//     console.log("connected to MongoDB");
//   }
// );
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/content", contentRoutes);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

let testPage = {
  title: "Posts",
  description: "Posts",
  keywords: "Posts",
  URL: "/posts",
  tagName: "div",
  className: "mb-1 border border-gray-300 w-full p-2",
  idName: "",
  style: "",
  apis: [
    {
      URL: "http://localhost:4000/content",
      method: "GET",
      description: "Get all content",
      result: "res.data",
    },
  ],

  static: false,
};

app.post("/generate", function (req, res) {
  console.log(generateReactPage(testPage));
  var jsonPath = path.join(
    __dirname,
    "..",
    "client",
    "src",
    "generate",
    "pages",
    testPage.title + ".js"
  );

  fs.writeFile(jsonPath, generateReactPage(testPage), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
  res.send("Hello generate!");
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
