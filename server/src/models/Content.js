/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    keywords: {
      type: [String],
    },
    URL: {
      type: String,
    },
    tagName: {
      type: String,
      required: true,
      default: "div",
    },
    className: {
      type: String,
      default: "mb-1 border border-gray-300 w-full p-2",
    },
    idName: {
      type: String,
    },
    style: {
      type: String,
    },
    contents: {
      type: Schema.Types.ObjectId,
      ref: "UserSetup",
    },
    static: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  { timestamps: false }
);

const ContentModel = mongoose.model("Content", contentSchema);

module.exports = ContentModel;
