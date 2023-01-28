import { Link } from "react-router-dom"

const CartWidget = ({ quantity }) => {
    return (
        <Link to="/cart" style={{ backgroundColor: 'white', color: 'black'}}>
            <img src='/images/icons8-carrito-de-compras-30.png' alt='cart-widget'/>
            { quantity }
        </Link>
    )
}

export default CartWidget