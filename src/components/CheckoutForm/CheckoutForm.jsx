import React, { useState } from 'react';
import Styles from './CheckoutForm.module.css'

const CheckoutForm = ({ createOrder }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        createOrder(userData);
    };

    return (
        <form className={Styles.formulario} onSubmit={handleSubmit}>
            <input className={Styles.input} type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} />
            <input className={Styles.input} type="email" name="email" placeholder="Correo electrónico" value={userData.email} onChange={handleInputChange} />
            <input className={Styles.input} type="text" name="phone" placeholder="Teléfono" value={userData.phone} onChange={handleInputChange} />
            <button className={Styles.boton} type="submit">Enviar</button>
        </form>
    );
};

export default CheckoutForm;
