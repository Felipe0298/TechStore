import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../App.css"
import { Link } from "react-router-dom";

const Item = ({name, img, price, id}) => {
  return (
    <div className="div__Item">
      <Card style={{ width: "14rem"}}>
        <Card.Img variant="top" src={img} className="img__Item-size"  />
        <Card.Body>
          <Card.Title className="title__Item">{name}</Card.Title>
          <Card.Text className="price__Item">
            ${price}
          </Card.Text>
          <Link to={`/item/${id}`}><Button variant="primary">Ver detalle</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
