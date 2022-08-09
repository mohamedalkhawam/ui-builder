/** @format */

const express = require("express");

const {
  postContent,
  patchContent,
  getContents,
  deleteContent,
  getAllContents,
} = require("../controllers/contentControllers");

const router = express.Router();

router.get("/", getContents);
router.get("/all", getAllContents);
router.post("/", postContent);
router.delete("/:id", deleteContent);
router.patch("/:id", patchContent);

module.exports = router;
