import { useState } from "react"
import styles from './ItemCount.module.css';

const ItemCount =({ initial = 1, stock, onAdd  }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    return (
        <article>
            <div className={styles.cantidad}>
                <button className={styles.menos} onClick={decrement}>-</button>
                <h3 className={styles.numero}>{count}</h3>
                <button className={styles.mas} onClick={increment}>+</button>
            </div>
            <button className={styles.boton}onClick={() => onAdd(count)}>Agregar al carrito</button>
        </article>
    )
}

export default ItemCount