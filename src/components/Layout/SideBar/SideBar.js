/**
Represents the sidebar component of the application.
@function
@return {JSX.Element} JSX representation of the sidebar component
*/

import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Muscu } from "./../../../assets/muscu.svg";
import { ReactComponent as Velo } from "./../../../assets/velo.svg";
import { ReactComponent as Nage } from "./../../../assets/nage.svg";
import { ReactComponent as Yoga } from "./../../../assets/yoga.svg";

const SideBar = () => {
  return (
    <SideBarStyle>
      <div className="icons-container">
        <Link to="/products">
          <Yoga />
        </Link>
        <Link to="/products">
          <Nage />
        </Link>
        <Link to="/users">
          <Velo />
        </Link>
        <Link to="/dashboard">
          <Muscu />
        </Link>
      </div>
      <p>Copyright, SportSee 2020</p>
    </SideBarStyle>
  );
};

export default SideBar;

const SideBarStyle = styled.div`
  background-color: var(--primary);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 70px - 0rem);
  width: 100px;
  position: relative;

  .icons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: 85%;
  }

  p {
    position: absolute;
    bottom: 80px;
    color: var(--third);
    transform: rotate(270deg);
    white-space: nowrap;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
  }
`;
