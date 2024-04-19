import styles from  './ItemListContainer.module.css';
import { useState, useEffect, memo, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { NotificationContext } from '../../notification/NotificationsService';
import nike from './assets/nike.png'


const ItemListMemorized = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const showNotification = useContext(NotificationContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = categoryId ? (
                    query(collection(db, 'products'), where('category', '==', categoryId))
                ) : (
                    collection(db, 'products')
                );

                const querySnapshot = await getDocs(productsCollection);
                const productsAdapted = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(productsAdapted);
            } catch (error) {
                // showNotification('error', 'Hubo un error cargando los productos');
            }
        };
        fetchProducts();
    }, [categoryId, showNotification]);

    return (
        <div className={styles.container}>
            <article className={styles.banner}>
                <div className={styles.textobanner}>
                    <h1>Conoce las nuevas Big Bubble Air Max Day (2024)</h1>
                    <button className={styles.boton}>Comprar Ahora</button>
                </div>
                <div className={styles.diseno}>
                    <img className={styles.imgbanner} src={nike} alt="nike-banner"/>
                </div>
            </article>
            <h1 className={styles.titulo}>Todos los Productos</h1>
            <ItemListMemorized products={products}/>
        </div>
    );
}

export default ItemListContainer;