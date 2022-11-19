import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const f10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(f10);

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