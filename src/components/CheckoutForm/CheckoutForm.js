import { useState } from "react";

const CheckoutForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>

        <label>Correo electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>

        <label>Celular</label>
        <input
          type="number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        ></input>
      </form>

      <button>Procesar compra</button>
    </div>
  );
};

export default CheckoutForm;
