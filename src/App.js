import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Lista de productos"/>}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Productos filtrados"}/>}></Route>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
