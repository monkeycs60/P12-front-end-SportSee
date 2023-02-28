import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <SideBar />
    </>
  );
};

export default Layout;
