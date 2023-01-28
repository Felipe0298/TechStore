import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ id, name, img, category, description, stock, price, img2, img3}) => {
  const [quantity, setQuantity] = useState(0);
  const {addItem} = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    console.log(`Se agregaron ${quantity} ${name}`);

    setQuantity(quantity);
    addItem({id, name, quantity, price})
  };

  return (
    <div className="div__ItemDetails-category">
      <h4 className="h4__ItemDetails-category">Producto {category}</h4>
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
          <Card style={{ width: "23rem" }}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle className="div__ItemDetails-description">{description}</Card.Subtitle>
              <Card.Title className="mt-2">Precio: ${price}</Card.Title>
              <div>
                {quantity > 0 ? (
                  <Link><Button variant="outline-dark">Terminar compra</Button></Link>
                ) : (
                  <ItemCount stock={stock} onAdd={handleOnAdd} />
                )}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
