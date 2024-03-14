import styles from  './CartWidget.module.css';
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button className={styles.carrito}>
            <img className={styles.cart} src={cart} alt="cart-widget"/>
            0
        </button>
    )
}

export default CartWidget