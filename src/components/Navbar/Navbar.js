import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="nav__Navbar">
      <h1 className="h1__Navbar"><img src="/images/Cool Text - TechStore 427490008210624.png" alt="TechStore"></img></h1>
      <div className="div__Navbar">
        <Link to="/" className="link__Navbar">
          Inicio
        </Link>
        <Link to="/category/apple" className="link__Navbar">
          Apple
        </Link>
        <Link to="/category/samsung" className="link__Navbar">
          Samsung
        </Link>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;
