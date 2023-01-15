import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
    getProductById(productId)
    .then(product=>{
        setProduct(product)
    }).catch(error =>{
        console.log(error);
    })
},[productId])

return(
    <div>
        <h2>Detalle del producto</h2>
        <ItemDetail {...product}/>
    </div>
)
}

export default ItemDetailContainer