import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import styles from "../ItemDetail/ItemDetail.module.css"
import { Link } from "react-router-dom"

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
    <article>
        <section>
        <img className={styles.foto} src={img}/>
        <div>
            <h2 className={styles.titulo}>{name}</h2>
            <h4 className={styles.descripcion}>Descripción: {description}</h4>
            <h3 className={styles.precio}>Precio: $ {price}</h3>
            <h4 className={styles.categoria}>Marca: {category}</h4>
            {/* <ItemCount stock={stock}/> */}
        </div>
        </section>
        <footer>
            {
                quantityAdded > 0 ? (
                    <Link to="/cart">Finalizar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
    )
}

export default ItemDetail