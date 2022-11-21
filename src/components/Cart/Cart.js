import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // const total = cart.reduce((total, eachProduct) => total + eachProduct.price, 0);

    // getting total price using loop
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = Math.round(total + product.price);
    }

    // shipping / delevery cost
    let deliveryPrice = 36;
    if (total == 0) {
        deliveryPrice = 0;
    } else if (total > 190 && total < 399) {
        deliveryPrice = 25;
    } else if (total > 400) {
        deliveryPrice = 14;
    }

    // tax / vat
    const tax = Math.round(total / 7);  // 7% of total price

    // total bill
    const totalBill = Math.round(total + deliveryPrice + tax);

    return (
        <div className='cart'>
            {/* <h3>Cart</h3>
            <h3>=== Your Orders ===</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price <span className='red-alert-color'>(without shipping and tax)</span>: ${total}</p>
            <p>Shpping Cost: ${deliveryPrice}</p>
            <p>Tax fee <span className='red-alert-color'>(required)</span>: ${tax}
                <br /> <small>**7% of total price</small>
            </p>
            <p>Total Bill: ${totalBill}</p> */}

            <table>
                <h3>Cart</h3>
                <h3>=== Your Orders ===</h3>
                <tbody>
                    <tr>
                        <td>Items Ordered:</td>
                        <td>{cart.length}</td>
                    </tr>
                    <tr>
                        <td>Total Price <span className='red-alert-color'><br />(without shipping and tax)</span>:</td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td>Shpping Cost:</td>
                        <td>${deliveryPrice}</td>
                    </tr>
                    <tr>
                        <td>Tax fee <span className='red-alert-color'>(required)</span>:
                            <br /> <small>**7% of total price</small>
                        </td>
                        <td>${tax}</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:"bold", color:"red"}}>Total Bill: </td>
                        <td>${totalBill}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
};

export default Cart;