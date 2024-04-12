import styles from  './ItemListContainer.module.css';
import { useState, useEffect, memo, useContext } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { NotificationContext } from '../../notification/NotificationsService';


const ItemListMemorized = memo(ItemList);

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);

    const { categoryId } = useParams();
    const showNotification = useContext(NotificationContext);

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev);
        }, 1000);
    }, []);
    
    
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
                showNotification('error', 'Hubo un error cargando los productos');
            }
        };

        fetchProducts();
    }, [categoryId, showNotification]);

    return (
        <div className={styles.container}>
            <h1 className={styles.bienvenida}>{ greeting }</h1>
            <ItemListMemorized products={products}/>
        </div>
    );
}

export default ItemListContainer;