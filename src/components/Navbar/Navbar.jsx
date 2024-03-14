import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, } from "react-router-dom"

const Navbar = () => {

 

    return (  
            <nav className={styles.navbar}>
                <Link to='/'>
                    <h2 className={styles.logo}>Loots</h2>
                </Link>
                <div className={styles.menu}>
                    <Link to='/category/nike'>Nike</Link>
                    <Link to='/category/adidas'>Adidas</Link>
                    <Link to='/category/newbalance'>New Balance</Link>
                </div>
                <CartWidget />
            </nav>
            
    )
}

export default Navbar