import { useState, useEffect } from "react"
// import { getProductsById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import styles from "../ItemDetailContainer/ItemDetailContainer.module.css"
import { QueryDocumentSnapshot, getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const productDoc = doc(db, "products", itemId)

        getDoc(productDoc)
            .then(QueryDocumentSnapshot => {
                const data = QueryDocumentSnapshot.data()
                const productsAdapted = { id: QueryDocumentSnapshot.id, ...data}

                setProduct(productsAdapted)
            })
            .catch()        // getProductsById(itemId)
        // .then(result => {
        //     setProduct(result)
        // })
        // .catch(error => {
        //     console.error("Error al obtener los productos:", error)
        // })
        
    }, [itemId])


    return (
        <main>
            <h1 className={styles.detalle}>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer