import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";

const ItemDetailContainer = () => {
  const [SpecificProducts, setSpecificProducts] = useState([]);

  useEffect(() => {
    getProducts().then((item) => {
      setSpecificProducts(item);
    });
  }, []);

  let itemID = prompt("Ingresa el ID de un item, va del 1 al 3");
  const SpecificItem = SpecificProducts.find((ItemId) => ItemId.id === itemID);

  console.log(SpecificItem);

  return (
    <div key={SpecificItem.id}>
      <img src={SpecificItem.img} alt="description"></img>
      <div>
        <h2>{SpecificItem.name}</h2>
        <p>{SpecificItem.description}</p>
        <h2>{SpecificItem.price}</h2>
        <button>Mas info</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
