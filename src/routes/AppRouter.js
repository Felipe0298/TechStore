import { Route, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from '../components/CartContainer/CartContainer';
import Checkout from '../components/Checkout/Checkout';
const AppRouter = () =>{
    return(
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Lista de productos"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"}/>}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}></Route>
          <Route path='/cart' element={<CartContainer/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
    )
}

export default AppRouter