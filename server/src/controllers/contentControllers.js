/** @format */

const { removeContent } = require("../services/contentService");
const { loadContents } = require("../services/contentService");
const { updateContent } = require("../services/contentService");
const { createContent } = require("../services/contentService");
const { loadAllContents } = require("../services/contentService");

exports.postContent = async (req, res) => {
  try {
    const newContent = await createContent(req.body);
    res.status(200).json({ newContent });
  } catch (e) {
    res.status(500).json({
      ...e,
    });
  }
};

exports.patchContent = async (req, res) => {
  try {
    await updateContent(req.params.id, req.body);
    res.status(200).json({ message: "Content updated successfully" });
  } catch (e) {
    res.status(500).json({
      ...e,
    });
  }
};

exports.getContents = async (req, res) => {
  try {
    const contents = await loadContents(req.query.setup_id);
    res.status(200).json({ contents });
  } catch (e) {
    res.status(500).json({
      ...e,
    });
  }
};

exports.getAllContents = async (req, res) => {
  try {
    const contents = await loadAllContents();
    res.status(200).json({ contents });
  } catch (e) {
    res.status(500).json({
      ...e,
    });
  }
};

exports.deleteContent = async (req, res) => {
  try {
    await removeContent(req.params.id);
    res.status(200).json({ message: "delete" });
  } catch (e) {
    res.status(500).json({
      ...e,
    });
  }
};
