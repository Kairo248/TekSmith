import React from 'react';

function ProductCard({ product }) {
    return (
        <div>
            <img src={product.image} alt={product.name} style={{ width: "100%"}} />
            <h3>{product.name}</h3>
            <p>{product.descreption}</p>
            <p><strong>R{product.price}</strong></p>
            <button>Add to Cart</button>
        </div>
    );
}

export default ProductCard;