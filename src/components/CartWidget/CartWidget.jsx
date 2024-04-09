import { useContext } from 'react';
import styles from  './CartWidget.module.css';
import cart from './assets/cart.svg'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to= '/cart' className={styles.carrito}>
            <img className={styles.cart} src={cart} alt="cart-widget"/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget