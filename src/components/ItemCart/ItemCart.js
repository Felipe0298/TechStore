import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Table from "react-bootstrap/Table";

const ItemCart = ({ name, quantity, price, id }) => {
  const { removeItem, total } = useContext(CartContext);

  return (
    <article
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#efefef",
      }}
    >
      <Table striped="columns">
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quantity}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>@{price * quantity}</td>
            <button
              onClick={() => removeItem(id)}
              style={{ backgroundColor: "red" }}
            >
              Remover
            </button>
          </tr>
        </tbody>
      </Table>
    </article>
  );
};

export default ItemCart;
