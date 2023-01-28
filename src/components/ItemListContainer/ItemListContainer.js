/* import { getProducts, getProductsByCategory } from "../../asyncMock"; */
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db} from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error] = useState(false);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    (async()=>{
      setLoading(true)
      const productsRef = collection(db,"products")
      
      try{

        const snapshot = await getDocs(productsRef)
        const productsAdapted = snapshot.docs.map(doc =>{
          const fields = doc.data()
          return {id: doc.id, ...fields}
        })
        setProducts(productsAdapted)
      } catch(error) {
        console.log(error);
        
      }finally{
        setLoading(false)
      }
      
    }) ()

  }, [categoryId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  if (error) {
    return <h1>Recargue la pagina</h1>;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
