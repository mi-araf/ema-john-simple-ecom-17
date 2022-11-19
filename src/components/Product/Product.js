import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by:<span id='sellerStyle'>{seller}</span></small></p> {/* company / seller */}
                <p style={{fontSize: "1.22rem", cursor: "not-allowed"}}>&nbsp; ${price}</p> {/* price */}
                <p><small>Only {stock} pcs left in stock || Buy Soon!</small></p>
            </div>
        </div>
    );
};

export default Product;