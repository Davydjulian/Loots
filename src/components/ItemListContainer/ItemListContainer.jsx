import styles from  './ItemListContainer.module.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.bienvenida}>{ greeting }</h1>
        </div>
    )
}

export default ItemListContainer