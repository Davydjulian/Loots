import styles from '../ItemList/ItemList.module.css'
import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div className={styles.list} onClick={() => console.log('hice click en itemlist')}>
            {
                products?.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList