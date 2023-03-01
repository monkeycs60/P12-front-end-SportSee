import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { ReactComponent as SportLogo } from "./../../../assets/logo.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <SportLogo />
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/profil"}>Profil</NavLink>
        <NavLink to={"/reglages"}>Réglages</NavLink>
        <NavLink to={"/communaute"}>Communauté</NavLink>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  background-color: var(--primary);
  padding: 1rem;
  height: 100px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  a {
    color: var(--third);
    text-decoration: none;
    font-size: 1.6rem;
    padding: 10px;
  }
`;
