import { useState } from "react";
import Button from 'react-bootstrap/Button';


const ItemCount = ({ initial = 1, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const increment = () => {
    if(count < stock)
    setCount(prev => prev + 1);
  };

  return (
    <div className="div__ItemCount">
      <h3>{count}</h3>
      <Button variant="dark" onClick={decrement} className="button__ItemCount">-</Button>
      <Button variant="outline-dark" onClick={()=> onAdd(count)} className="button__ItemCount">Agregar al carrito</Button>
      <Button variant="dark" onClick={increment} className="button__ItemCount">+</Button>
    </div>
  );
};

export default ItemCount;
