import styles from  './ItemListContainer.module.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ?  getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])


    return (
        <div className={styles.container}>
            <h1 className={styles.bienvenida}>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer