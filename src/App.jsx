import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'

const App = () => {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de la categoria: '}/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element ={<CartView />} />
            <Route path='/checkout' element ={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
