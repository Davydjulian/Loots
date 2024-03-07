import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (  
            <nav className={styles.navbar}>
                <h2 className={styles.logo}>Loots</h2>
                <div className={styles.menu}>
                    <a>Nike</a>
                    <a>Adidas</a>
                    <a>Puma</a>
                    <a>Reebok</a>
                </div>
                <CartWidget />
            </nav>
            
    )
}

export default Navbar