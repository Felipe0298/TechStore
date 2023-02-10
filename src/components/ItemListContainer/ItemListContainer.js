import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../services/firebase/firestore/products";
     
const ItemListContainer = () => {

  const {categoryId} = useParams()

  const getProductsWithCategory = () => getProducts(categoryId)

  const {data: products, error, loading} = useAsync(getProductsWithCategory ,[categoryId])

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Recargue la pagina</h1>;
  }

  return (
    <div>
      <h1>{categoryId ? `Nuestros productos ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}` : "Nuestros productos"}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

  
