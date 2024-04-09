import styles from  './ItemListContainer.module.css';
import { useState, useEffect, memo } from 'react';
// import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"
import { getDocs, collection, QuerySnapshot } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListMemorized = memo(ItemList)


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 1000)
    }, [])
    
    
    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Hubo un error cargado los productos')
            })        
    }, [categoryId])


    return (
        <div className={styles.container}>
            <h1 className={styles.bienvenida}>{ greeting }</h1>
            <ItemListMemorized products={products}/>
        </div>
    )
}

export default ItemListContainer