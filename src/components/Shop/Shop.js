import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const f10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(f10);

    return (
        <div>
            <h3>{products.length}</h3>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;