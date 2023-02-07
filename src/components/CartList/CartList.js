import ItemCart from "../ItemCart/ItemCart"
import Table from "react-bootstrap/Table";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const CartList = ({cart}) =>{

  const {totalQuantity, total} = useContext(CartContext)

    return(

      <div>

        <article
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#efefef",
        }}
      >
        <Table striped="columns">
          <thead>
            <tr>
              <th>Cantidad</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map(prod => <ItemCart key={prod.id} {...prod}/>)
            }

       </tbody>
      </Table>

    </article>
            {totalQuantity == 0 ? <h3>Por favor agregar productos al carrito</h3> : <h3>La cantidad de articulos agregados es de {totalQuantity} <br/> El total a pagar es de ${total}</h3>}
            
      </div>
    )
}

export default CartList