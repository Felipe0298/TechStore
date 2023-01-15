import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../App.css"
import { Link } from "react-router-dom";

const Item = ({name, img, description, price, id}) => {
  return (
    <div className="div__Item">
      <Card style={{ width: "10rem"}}>
        <Card.Img variant="top" src={img} className="img__size" />
        <Card.Body>
          <Card.Title className="title__Item">{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Text className="price__Item">
            ${price}
          </Card.Text>
        <Link to={`/item/${id}`} >Ver detalle</Link>
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
