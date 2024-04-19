import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/hooks/useNotification'
import styles from '../ItemDetail/ItemDetail.module.css'

const InputCount = ({ onAdd, stock, initial= 1 }) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p >{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {

    const [inputType, setInputType] = useState('button')

    // const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    const { addItem, isInCart } = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        console.log(objProductToAdd)
        showNotification('success', `Se agrego correctamente ${quantity} ${name}`)
        // setQuantity(quantity)

        addItem(objProductToAdd)
    }

    return (
        <article  className={styles.card}>
            <header>
                <img className={styles.foto} src={img} alt={name}/>
            </header>
            <section>
                <h2 className={styles.titulo}> {name} </h2>
                <p className={styles.categoria}>
                    Categoria: {category}
                </p>
                <p className={styles.descripcion}>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
                <button className={styles.boton} onClick={() => setInputType(inputType === 'input' ? 'button' : 'input')}>
                Cambiar contador
            </button>
                {
                    !isInCart(id) ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    ) : (
                        <>
                            <Link to='/cart'>Finalizar compra</Link>
                        </>
                    )
                }
            </section>
            
        </article>
    )
}

export default ItemDetail