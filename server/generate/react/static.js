/** @format */

exports.static = (content) => {
  return `import React from "react";

const ${content.title} = () => {
  return <${content.tagName} 
  className="${content.className}" 
  id="${content.idName}" 
  >
  static
  </${content.tagName}>;
};

export default ${content.title};`;
};
