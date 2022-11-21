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
                <h3 className='product-name'>{name}</h3>
                <p><small>by:<span id='sellerStyle'>{seller}</span></small></p> {/* company / seller */}
                <p style={{fontSize: "1.22rem", cursor: "not-allowed"}}>&nbsp; ${price}</p> {/* price */}
                <p><small>Only {stock} pcs left in stock || Buy Soon!</small></p>
                &nbsp;&nbsp;
                <button onClick={() => props.handleAddProduct(props.product)} className='cart-button'>
                    <i class="ri-shopping-cart-fill"></i>Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;