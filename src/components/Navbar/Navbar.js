import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav__Navbar">
      <h1 className="h1__Navbar">TechStore</h1>
      <div className="div__Navbar">
        <Link to="/" className="link__Navbar">
          Inicio
        </Link>
        <Link to="/category/celular" className="link__Navbar">
          Celulares
        </Link>
        <Link to="/category/tablet" className="link__Navbar">
          Tablet
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
