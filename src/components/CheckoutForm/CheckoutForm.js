import { useState } from "react"

const CheckoutForm = () => {
    const [formData, setFormData] = useState({name :"", phone:"", email:""});
    const handleChange = (event) =>{
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(formData);
        
    }

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <br />
          <label>
            Telefono:
            <textarea name="phone" onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Finalizar compra</button>
        </form>
        );
    };
    

export default CheckoutForm