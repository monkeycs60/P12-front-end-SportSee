import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/about"}>A Propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
