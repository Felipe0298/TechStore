import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";

const ItemDetail = ({ id, name, img, category, description, stock, price }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (qty) => {
    console.log(`Se agregaron ${qty} ${name}`);
    
    setQuantity(qty);
  };

  return (
    <div>
      <h4>{name}</h4>
      <p>{category}</p>
      <img src={img} alt={name}></img>
      <p>${price}</p>
      <p>{description}</p>
      {quantity > 0 ? (
        <Link>Terminar compra</Link>
      ) : (
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
