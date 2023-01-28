import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)


    useEffect(()=>{
        (async()=>{
            const productRef = doc(db, "products", productId)
            try {
                
                const snapshot = await getDoc(productRef)
                const fields = snapshot.data()
                const productAdapted = { id: snapshot.id, ...fields}
                setProduct(productAdapted)
            } catch(error){
                console.log(error);
            } finally{
                setLoading(false)
            }
        })()
},[productId])

if (loading) {
    return <h1>Cargando...</h1>;
  }

return(
    <div>
        <h2>Detalle del producto</h2>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer