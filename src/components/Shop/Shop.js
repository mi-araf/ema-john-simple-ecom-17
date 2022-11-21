import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // to show {15} products
    const f15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(f15);

    const [cart, setCart] = useState([]); 

    const handleAddProduct = (product) => {
        // console.log('product added', product);
        const newCart = [...cart, product];   // copy the old array
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(eachProduct => <Product handleAddProduct={handleAddProduct} product={eachProduct}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
            
        </div>
    );
};

export default Shop;