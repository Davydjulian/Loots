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
        const categoriesCollection = collection(db, 'categories');
        const query = getDocs(categoriesCollection);
    
        query.then(querySnapshot => {
            const categoriesAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            setCategories(categoriesAdapted);
        }).catch(error => {
            console.error('Error fetching categories:', error);
        });
    }, []);
    
    

    return (  
            <nav className={styles.navbar}>
                    <h2 onClick={() => navigate('/')} className={styles.logo}>Loots</h2>
                <div className={styles.menu}>
                    {/* <Link to='/category/nike'>Nike</Link>
                    <Link to='/category/jordan'>Jordan</Link>
                    <Link to='/category/adidas'>Adidas</Link> */}
                    {categories.map(category => (
                <Link key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
            ))}
                </div>
                <CartWidget />
            </nav>
            
    )
}

export default Navbar