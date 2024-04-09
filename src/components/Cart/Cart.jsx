import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>Tu carrito está vacío</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(product => <CartItem key={product.id} {...product}/>) }
            <h3>Total: ${total}</h3>
            <Link to='./checkout'>Pagar</Link>
        </div>
    )
}

export default Cart