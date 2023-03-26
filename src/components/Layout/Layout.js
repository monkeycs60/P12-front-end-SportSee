/**
Represents the layout component of the application.
@function
@param {object} props - The props that are passed to the component.
@param {React.ReactNode} props.children - The children elements to be rendered.
@return {JSX.Element} JSX representation of the layout component
*/

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
