import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const ItemCart = ({name,quantity, price, id }) =>{
    const {removeItem} = useContext(CartContext)

    return(
        <article style={{display:"flex", justifyContent:"space-around", backgroundColor: "#efefef"}}>
            <h3>{name}</h3>
            <h4>Cantidad: {quantity}</h4>
            <h4>Precio: ${price}</h4>
            <h3>Total: ${price*quantity}</h3>
            <button onClick={() => removeItem(id)} style={{backgroundColor: "red"}}>Remover</button>
        </article>

    )
}

export default ItemCart