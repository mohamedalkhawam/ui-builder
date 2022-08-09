/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
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
      required: true,
      default: "mb-1 border border-gray-300 w-full p-2",
    },
    idName: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
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
