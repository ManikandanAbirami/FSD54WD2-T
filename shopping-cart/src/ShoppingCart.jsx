import React from 'react'

function ShoppingCart({ cartItems, onRemoveFromCart }) {
    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No items in the cart</p> : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ShoppingCart