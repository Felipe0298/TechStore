import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Tu carrito:</h1>
      <CartList cart={cart} />
    </div>
  );
};

export default Cart;
