import styles from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    
    return (
        <article  className={styles.card}>
            <h2 className={styles.titulo}>{name}</h2>
            <img className={styles.imagen} src={img}/>
            <h3 className={styles.precio}>Precio: $ {price}</h3>
            <Link to={`/item/${id}`}>Ver más</Link>
        </article>
    )
}

export default Item