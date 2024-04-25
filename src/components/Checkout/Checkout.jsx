import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getDocs, collection, query, where, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import styles from './Checkout.module.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const createOrder = async (userData) => {
        try {
            setLoading(true);

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                total: 0,
                date: Timestamp.now()
            };

            const orderRef = await addDoc(collection(db, 'orders'), objOrder);
            setOrderId(orderRef.id);


        } catch (error) {
            console.error('Hubo un error en la generación de la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && <h1>Su orden está siendo generada...</h1>}
            {orderId && <h1>El ID de su orden es: {orderId}</h1>}
            {!loading && !orderId && (
                <>
                    <h1 className={styles.titulo}>Checkout</h1>
                    <CheckoutForm createOrder={createOrder} />
                </>
            )}
        </div>
    );
};

export default Checkout;