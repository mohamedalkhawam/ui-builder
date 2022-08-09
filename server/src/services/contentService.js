/** @format */

const mongoose = require("mongoose");
const Content = require("../models/Content");

exports.createContent = async (data) => {
  const content = new Content(data);
  await content.save();
  return content;
};

exports.updateContent = async (contentId, values) => {
  const updatedContent = {};
  if (values.title) {
    updatedContent.title = values.title;
  }
  if (values.description) {
    updatedContent.description = values.description;
  }
  if (values.keywords) {
    updatedContent.keywords = values.keywords;
  }
  if (values.URL) {
    updatedContent.URL = values.URL;
  }
  if (values.tagName) {
    updatedContent.tagName = values.tagName;
  }
  if (values.className) {
    updatedContent.className = values.className;
  }
  if (values.idName) {
    updatedContent.idName = values.idName;
  }
  if (values.style) {
    updatedContent.style = values.style;
  }
  if (values.static) {
    updatedContent.static = values.static;
  }
  if (values.contents) {
    updatedContent.contents = values.contents;
  }
  await Content.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(contentId) },
    updatedContent
  );
};

exports.loadContents = async (contentId) => {
  return await Content.find({ contentId }).exec();
};

exports.loadAllContents = async () => {
  return await Content.find().exec();
};

exports.removeContent = async (id) => {
  await Content.deleteOne({ _id: mongoose.Types.ObjectId(id) }).exec();
};
