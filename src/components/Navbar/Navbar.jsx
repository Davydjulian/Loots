import styles from "./Navbar.module.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = collection(db, 'categories')
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setCategories(categoriesAdapted)
            })
    })

    return (  
            <nav className={styles.navbar}>
                    <h2 onClick={() => navigate('/')} className={styles.logo}>Loots</h2>
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