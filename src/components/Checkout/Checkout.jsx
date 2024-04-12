import React, { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useContext(CartContext);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const createOrder = async () => {
        try {
            setLoading(true);

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.phone
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            };

            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));

            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;

            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;

                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });

            if(outOfStock.length === 0) {
                batch.commit();

                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);
                
                clearCart();
                setOrderId(id);
            } else {
                console.error('Hay productos que no tienen suficiente stock disponible');
            }
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
                    <h1>Checkout</h1>
                    <CheckoutForm userData={userData} setUserData={setUserData} createOrder={createOrder} />
                </>
            )}
        </div>
    );
};

export default Checkout;