import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h2 className="h2__ItemListContainer">{greeting}</h2>
        </div>
    )
}

export default ItemListContainer