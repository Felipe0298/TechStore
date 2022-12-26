import CartWidget from "../cartWidget/cartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1 className="h1__Navbar">TechStore</h1>

      <div className="div__Navbar">
        <div className="div__Navbar">
          <button>Inicio</button>
          <button>Samsung</button>
          <button>LG</button>
          <button>Apple</button>
          <button>Contacto</button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
