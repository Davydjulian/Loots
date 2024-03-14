const products = [
    {
        id: '001',
        name: 'Nike Air Max',
        price: '359.000',
        category: 'nike',
        img: 'https://images.stockx.com/360/Nike-Air-Max-1-Athletic-Department-Deep-Royal-Blue/Images/Nike-Air-Max-1-Athletic-Department-Deep-Royal-Blue/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1700148458&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Nike'
    },
    {
        id: '002',
        name: 'Nike Air Force',
        price: '559.000',
        category: 'nike',
        img: 'https://images.stockx.com/360/Nike-Air-Force-1-Low-White-07/Images/Nike-Air-Force-1-Low-White-07/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1635275427&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Nike'
    },
    {
        id: '003',
        name: 'Nike Air Max 97',
        price: '409.000',
        category: 'nike',
        img: 'https://images.stockx.com/360/Nike-Air-Max-97-Black-White-Anthricite/Images/Nike-Air-Max-97-Black-White-Anthricite/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1635168237&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Nike'
    },
    {
        id: '004',
        name: 'Nike Dunk Low Retro',
        price: '439.000',
        category: 'nike',
        img: 'https://images.stockx.com/360/Nike-Dunk-Low-Retro-White-Black-2021/Images/Nike-Dunk-Low-Retro-White-Black-2021/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1644250003&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Nike'
    },
    {
        id: '005',
        name: 'Adidas Campus 00s',
        price: '439.000',
        category: 'adidas',
        img: 'https://images.stockx.com/360/adidas-Campus-00s-Core-Black/Images/adidas-Campus-00s-Core-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1681284184&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Adidas'
    },
    {
        id: '006',
        name: 'New Balance 9060',
        price: '709.000',
        category: 'newbalance',
        img: 'https://images.stockx.com/360/New-Balance-9060-Black-Castlerock-Grey/Images/New-Balance-9060-Black-Castlerock-Grey/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1665037505&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de New Balance'
    },
    {
        id: '007',
        name: 'New Balance 550',
        price: '421.000',
        category: 'newbalance',
        img: 'https://images.stockx.com/360/New-Balance-550-White-Green/Images/New-Balance-550-White-Green/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1635799416&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de New Balance'
    },
    {
        id: '008',
        name: 'Adidas Samba OG',
        price: '339.000',
        category: 'adidas',
        img: 'https://images.stockx.com/360/adidas-Samba-OG-Cloud-White-Core-Black/Images/adidas-Samba-OG-Cloud-White-Core-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1687245728&h=384&q=57',
        stock: 10,
        description: 'Zapatilla de Adidas'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(product => product.id ===  productId))
      }, 100)
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(products => products.category === categoryId))
        }, 100)
    })
}

