/** @format */

const mongoose = require("mongoose");
const Content = require("../models/Content");

exports.createContent = async (data) => {
  const content = new Content(data);
  await content.save();
  return content;
};

exports.updateContent = async (contentId, values) => {
  const clearedFieldToUpdate = {};
  if (values.name) {
    clearedFieldToUpdate.name = values.name;
  }
  if (values.image) {
    clearedFieldToUpdate.image = values.image;
  }
  if (values.color) {
    clearedFieldToUpdate.color = values.color;
  }
  if (values.short_name) {
    clearedFieldToUpdate.short_name = values.short_name;
  }
  await Content.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(contentId) },
    clearedFieldToUpdate
  );
};

exports.loadContents = async (setup_id) => {
  return await Content.find({ setup_id }).exec();
};

exports.loadAllContents = async () => {
  return await Content.find().exec();
};

exports.removeContent = async (contentId) => {
  await Content.deleteOne({ _id: mongoose.Types.ObjectId(contentId) }).exec();
};
