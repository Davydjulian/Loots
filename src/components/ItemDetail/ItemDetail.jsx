import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, price, category, description, stock }) => {
    return (
    <article>
        <img src={img}/>
        <h2>{name}</h2>
        <h4>{category}</h4>
        <h3>Precio: $ {price}</h3>
        <h4>Descripción: {description}</h4>
        <ItemCount stock={stock}/>
    </article>
    )
}

export default ItemDetail