import './ItemListContainer.css'
import { getProducts } from '../../asyncMock'
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getProducts().then(productsFromApi =>{
            setProducts(productsFromApi)
        }).catch(error =>{
            setError(true)
        }).finally(()=>{
            setLoading(false)
        })
    }, [])

    console.log(products);
    
    if(loading){
        return <h1>Cargando...</h1>
    }

    if(error){
        return <h1>Recargue la pagina</h1>
    }

    return(
        <div>
            <h2 className="h2__ItemListContainer">{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer