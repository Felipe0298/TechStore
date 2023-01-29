import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Tu carrito:</h1>
      <CartList cart={cart} />
      <Link to="/checkout"><Button variant="outline-dark" className="button__ItemCount">Checkout</Button></Link>
    </div>
  );
};

export default CartContainer;
