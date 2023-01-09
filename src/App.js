import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/temDetailContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting="Bienvenido a la tienda con los mejores precios en tecnología" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
