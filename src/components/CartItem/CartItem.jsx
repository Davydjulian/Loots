import React from 'react';
import Cart from '../Cart/Cart';


const CartItem = ({ id, name, quantity, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Total: ${quantity * price}</p>
        </div>
    );
}

export default CartItem