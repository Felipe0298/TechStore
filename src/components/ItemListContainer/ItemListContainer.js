import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db} from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error] = useState(false);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

 useEffect(()=>{
  setLoading(true)

  const collectionRef = categoryId
  ?query(collection(db,"products"), where("category","==", categoryId))
  :collection(db,"products")

  getDocs(collectionRef).then(response=>{
    const productAdapted = response.docs.map(doc =>{
      const data = doc.data()
      return {id: doc.id, ...data}
    })

    setProducts(productAdapted)
  }).catch(error =>{
    console.log(error);
  }).finally(()=>{
    setLoading(false)
  })

 }, [categoryId])

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
