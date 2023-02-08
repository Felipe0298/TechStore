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
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const createOrder = async (e) => {
    e.preventDefault()
    setLoading(true);
    
    try {
      const objOrder = {
        buyer: {
          name,
          lastName,
          phone,
          email
        },
        items: cart,
        total,
      };
      
      if (objOrder.buyer.name === "" || objOrder.buyer.lastName === "" || objOrder.buyer.phone === ""|| objOrder.buyer.email === "" || objOrder.buyer.email !== email2) {
        alert("Verifica los datos ingresados")
        return false;
      }

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
        <h1>Muchas gracias por tu compra</h1>
        <h2>El ID de tu orden es: {orderId}</h2>
      </div>
    );
  }

  if(cart.length === 0){
    return(
      <div>
        <h1>No hay producto en el carritos</h1>
      </div>
    )
  }

  
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h1>Checkout</h1>
<form style={{display:"flex", flexDirection:"column", width:"50%", margin:"0 auto", padding:"2%", background:"rgb(255,255,255)", background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(128,137,139,0.2358193277310925) 100%)"}}>
    <label>Nombre:</label>
    <input type="text" value={name} onChange={(event)=> setName(event.target.value)} required ></input>

    <label>Apellido:</label>
    <input type="text" value={lastName} onChange={(event)=> setLastName(event.target.value)} required ></input>

    <label>Correo electrónico:</label>
    <input type="email" value={email} onChange={(event)=> setEmail(event.target.value)} required pattern="[^@\s]+@[^@\s]+"></input>

    <label>Verifica el correo electrónico:</label>
    <input type="email" value={email2} onChange={(event)=> setEmail2(event.target.value)} required pattern="[^@\s]+@[^@\s]+"></input>

    <label>Celular</label>
    <input type="number" value={phone} onChange={(event)=> setPhone(event.target.value)} required minLength={10} ></input>
    
<button style={{marginTop:"3%"}} onClick={createOrder} >Procesar compra</button>
</form>

    </div>
  );
};

export default Checkout;
