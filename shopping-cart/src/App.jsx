import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
import Div from './div'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  }

  const handleRemoveFromCart = (productToRemove) => {
    setCartItems(prevItems => prevItems.filter(product => product !== productToRemove));
  }

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <ShoppingCart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <Div></Div>
    </div>
  )
}

export default App
