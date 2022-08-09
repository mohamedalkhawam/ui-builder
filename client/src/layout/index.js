/** @format */

import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen bg-zinc-700 p-3 pt-16">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
