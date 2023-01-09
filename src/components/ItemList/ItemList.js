const ItemList = ({ products }) => {
   
  return (
    <ul>
      {products.map((prod) => (
        <div key={prod.id}>
        <img src={prod.img}  alt="description"></img>
        <div>
          <h2>{prod.name}</h2>
          <p>{prod.description}</p>
          <h2>{prod.price}</h2>
          <button>Comprar</button>
        </div>
      </div>
      ))}
    </ul>
  );
};

export default ItemList;
