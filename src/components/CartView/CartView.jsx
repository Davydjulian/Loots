import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from './CartView.module.css';

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext);

    return (
        <div className={styles.cart}>
            <h1 className={styles.titulo}>Mi carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <article className={styles.item} key={prod.id}>
                            <img src={prod.img} alt={prod.name} className={styles.image}/>
                            <h2 className={styles.producto}>{prod.name}</h2>
                            <button className={styles.eliminar} onClick={() => removeItem(prod.id)}>X</button>
                        </article>
                    )
                })
            }
            </section>
            <Link className={styles.pagar} to='/checkout'>Ir a pagar</Link>
        </div>
    );
}

export default CartView;