import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  documentId,
  getDocs,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
 
  const createOrder = async () => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email
        },
        items: cart,
        total,
      };

      const batch = writeBatch(db);

      const getId = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", getId)
      );

      const productsAddedToCartFromFirestore = await getDocs(productsRef);
      const { docs } = productsAddedToCartFromFirestore;

      const outOfStock = [];

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        const { id } = orderAdded;
        setOrderId(id);

        clearCart();

        setTimeout(()=>{
          navigate("/")
        }, 5000)

        console.log(id);
      } else {
        console.log("Hay productos sin stock");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Generando orden</h1>;
  }

  if(orderId) {
    return (
      <div>
        <h1>El ID de tu orden es: {orderId}</h1>
      </div>
    );
  }

  if(cart.length === 0){
    return(
      <div>
        <h1>No hay producto en el carrito</h1>
      </div>
    )
  }

  
  return (
    <div>
      <h1>Checkout</h1>
<form>
    <label>Nombre:</label>
    <input type="text" value={name} onChange={(event)=> setName(event.target.value)} required></input>

    <label>Correo electrónico:</label>
    <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} required></input>

    <label>Celular</label>
    <input type="number" value={phone} onChange={(event)=> setPhone(event.target.value)} required></input>
<button onClick={createOrder}>Procesar compra</button>
</form>

    </div>
  );
};

export default Checkout;
