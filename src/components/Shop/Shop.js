import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // to show {15} products
    const f15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(f15);

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(eachProduct => <Product product={eachProduct}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
            
        </div>
    );
};

export default Shop;