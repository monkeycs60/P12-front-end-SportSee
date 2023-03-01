import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import styled from "styled-components";

const Layout = (props) => {
  return (
    <>
      <Header />
      <LayoutStyle>
        <SideBar />
        {props.children}
      </LayoutStyle>
    </>
  );
};

export default Layout;

const LayoutStyle = styled.div`
display: flex;
flex-direction: row;
`
