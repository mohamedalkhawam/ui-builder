/** @format */

const { static } = require("./static");
const { dynamic } = require("./dynamic");
const generateReactPage = (content) => {
  if (content.static) {
    return static(content);
  } else {
    return dynamic(content);
  }
};

module.exports = generateReactPage;
