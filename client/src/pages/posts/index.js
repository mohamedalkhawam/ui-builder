/** @format */

import React, { useState } from "react";
import Layout from "../../layout";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiLayers, FiMaximize, FiNavigation } from "react-icons/fi";
import { CgArrowsShrinkV, CgArrowAlignV } from "react-icons/cg";
import Modal from "../../components/modal";
const Posts = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState({
    title: "",
    tagName: "div",
    className: "mb-1 border border-gray-300 w-full p-2",
    idName: "",
    style: "",
    contents: [],
    static: true,
  });

  const [pageConfig, setPageConfig] = useState({
    title: "Posts",
    description: "Posts",
    keywords: "Posts",
    URL: "/posts",
    tagName: "div",
    className: "mb-1 border border-gray-300 w-full p-2",
    idName: "",
    style: "",
    contents: [
      {
        title: "",
        tagName: "div",
        className: "mb-1 border-2 border-gray-300 w-full p-2 h-64",
        idName: "",
        style: "",
        contents: [
          {
            title: "",
            tagName: "div",
            className: "mb-1 border-2 border-gray-300 w-full p-2 h-32",
            idName: "",
            style: "",
            contents: [],
            static: true,
          },
        ],
        static: true,
      },
    ],
    static: true,
  });

  const [tool, setTool] = useState("");
  return (
    <Layout>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        width="w-[500px]"
      >
        <div className="flex flex-col gap-y-3">
          <input
            className="w-full py-2 border px-2 rounded-lg outline-none appearance-none"
            value={content.title}
            placeholder="Title"
            name="title"
            onChange={(e) => {
              setContent({ ...content, title: e.target.value });
            }}
          />
          <input
            className="w-full py-2 border px-2 rounded-lg outline-none appearance-none"
            value={content.className}
            placeholder="Class Name"
            name="className"
            onChange={(e) => {
              setContent({ ...content, className: e.target.value });
            }}
          />
          <input
            className="w-full py-2 border px-2 rounded-lg outline-none appearance-none"
            value={content.idName}
            placeholder="Id Name"
            name="idName"
            onChange={(e) => {
              setContent({ ...content, idName: e.target.value });
            }}
          />
          <select
            className="w-full py-2 border px-2 rounded-lg outline-none appearance-none"
            name="tagName"
            value={content.tagName}
            onChange={(e) => {
              setContent({ ...content, tagName: e.target.value });
            }}
          >
            <option value="div">Div</option>
            <option value="img">Image</option>
            <option value="p">P</option>
          </select>
          <button
            className="w-full py-2 px-2 rounded-lg bg-zinc-800 text-zinc-50"
            onClick={() => {
              setPageConfig({
                ...pageConfig,
                contents: [...pageConfig.contents, content],
              });
              setContent({
                title: "",
                tagName: "ul",
                className: "mb-1 border border-gray-300 w-full p-2",
                idName: "",
                style: "",
                content: {},
                static: true,
              });
              setShowModal(false);
            }}
          >
            Add
          </button>
        </div>
      </Modal>
      <div className="flex justify-between items-start gap-x-3 w-full">
        <div className="w-24 rounded fixed left-3 bg-zinc-800 text-white flex flex-wrap">
          <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
            <FiNavigation />
          </div>
          <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
            <FiMaximize />
          </div>
          <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
            <MdKeyboardArrowUp />
          </div>
        </div>
        <div className="bg-[#e8e8e8] w-full min-h-[256px] ml-28 mr-[400px]">
          <pageConfig.tagName
            id={pageConfig.idName}
            className={pageConfig.className}
          >
            {pageConfig.contents.map((item) => (
              <item.tagName id={item.idName} className={item.className}>
                {item.title}
              </item.tagName>
            ))}
          </pageConfig.tagName>
        </div>
        <div className=" w-96 flex flex-col fixed right-3">
          <div className="w-full flex text-zinc-50 flex-col bg-zinc-800 rounded">
            <div className="w-full flex text-2xl">
              <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
                <FiLayers />
              </div>
              <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
                <CgArrowsShrinkV />
              </div>

              <div className="text-white w-12 h-12 rounded flex justify-center items-center text-2xl hover:bg-zinc-900 cursor-pointer duration-150">
                <CgArrowAlignV />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fixed text-5xl text-white transition-all duration-500 transform cursor-pointer hover:rotate-180 right-5 bottom-5"
        onClick={() =>
          // setPageConfig({
          //   ...pageConfig,
          //   contents: [...pageConfig.contents, content],
          // })
          setShowModal(true)
        }
      >
        <AiOutlinePlusCircle />
      </div>
    </Layout>
  );
};

export default Posts;
