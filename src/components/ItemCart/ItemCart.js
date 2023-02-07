import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemCart = ({ name, quantity, price, id }) => {
  const { removeItem } = useContext(CartContext);

  
  return (

    <tr>
      <td>{quantity}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{(price * quantity).toFixed(2)}</td>
      <td><button className="button__ItemCart" style={{background: "##ED213A", background: "-webkit-linear-gradient(to top, #93291E, #ED213A)",background: "linear-gradient(to top, #93291E, #ED213A)", color:"black", borderRadius:"10%"}} onClick={() => removeItem(id)}>Eliminar articulo
      </button></td>
    </tr>
  );
};

export default ItemCart;

