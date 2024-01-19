import React from 'react'

function ProductList({ onAddToCart }) {
    const products = ['Apple', 'Banana', 'Carrot'];
    const grey = "orange";
    const divStyle = {
        border: '1px solid white',
        borderRadius: '8px',
        padding: '15px',
        texAlign: 'center',
        backgroundColor: 'grey'
    }
    return (
        <div style={divStyle}>
            <h2>Products</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product}
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList