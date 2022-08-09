/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/content")
      .then((res) => {
        setData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setData([]);
    };
  }, []);
  return (
    <div className="mb-1 border border-gray-300 w-full p-2" id="">
      "data"
    </div>
  );
};

export default Posts;
