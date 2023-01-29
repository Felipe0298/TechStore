import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: []
})

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    
    const addItem = (productToAdd) =>{
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev, productToAdd])
        }
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () =>{
        let accu = 0;

        cart.forEach(prod=>{
            accu += prod.quantity
        })
        return accu
    }

    const removeItem = (id) =>{
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotal = () =>{
        let total = 0;

        cart.forEach(prod=>{
            total += prod.quantity*prod.price
        })
        return total
    }

    const clearCart = () =>{
        setCart([])
    }

    const totalQuantity = getTotalQuantity()
    const total = getTotal()

    return(
        <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, total, isInCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider