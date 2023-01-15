import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  stock,
  price,
  img2,
  img3,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (qty) => {
    console.log(`Se agregaron ${qty} ${name}`);

    setQuantity(qty);
  };

  return (
    <div className="div__ItemDetails-category">
      <h4>Producto {category}</h4>
      <div className="div__ItemDetails">
      <div className="div__ItemDetails-carousel">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt={name} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt={name} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt={name} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="div__ItemDetails-info">
        <h4>{name}</h4>
        <p>${price}</p>
        <p>{description}</p>
        {quantity > 0 ? (
          <Link>Terminar compra</Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
      </div>
    </div>
    </div>
    
  );
};

export default ItemDetail;
