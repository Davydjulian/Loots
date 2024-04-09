import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("hice click en item")
    }
    
    return (
        <article onClick={handleClick}  className={styles.card}>
            <h2 className={styles.titulo}>{name}</h2>
            <img className={styles.imagen} src={img}/>
            <h3 className={styles.precio}>Precio: $ {price}</h3>
            <Link className={styles.boton} to={`/item/${id}`}>Ver más</Link>
        </article>
    )
}

export default Item