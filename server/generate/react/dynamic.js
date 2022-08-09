/** @format */

exports.dynamic = (content) => {
  return `
import axios from "axios";
import React, { useEffect, useState } from "react";

const ${content.title} = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
        .get("${content.apis[0].URL}")
        .then((res) => {
            setData([${content.apis[0].result}]);
        })
        .catch((err) => {
            console.log(err);
        });

        return () => {
        setData([]);
        };
    }, []);
    return <${content.tagName} 
    className="${content.className}" 
    id="${content.idName}" 
    >
    ${JSON.stringify("data")}

    </${content.tagName}>;
};

export default ${content.title};`;
};
