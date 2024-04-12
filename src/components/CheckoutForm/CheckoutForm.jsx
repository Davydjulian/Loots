import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" value={userData.name} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Correo electrónico" value={userData.email} onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Teléfono" value={userData.phone} onChange={handleInputChange} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default CheckoutForm;
