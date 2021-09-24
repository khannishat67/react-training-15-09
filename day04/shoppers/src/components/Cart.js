import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
const mapStateToProps = (state) => ({
    cart: state.cart
})
const CartItem = ({ product, quantity }) => {
    return (
        <div className="cart-item">
            <div className="product-details">{product.name}</div>
            <div className="quantity">Quantity: {quantity}</div>
            <div className="amount">${product.price * quantity}</div>
        </div>
    )
}
const Cart = ({ cart = [] }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        const amt = cart.map(elem => elem.product.price * elem.quantity).reduce((a, b) => a + b, 0)
        setTotalAmount(amt)
    }, [])
    return (
            <div className="cart-container">

                <h1>Cart</h1>
                {   cart.length ?
                    cart.map(elem => <CartItem product={elem.product} quantity={elem.quantity} />)
                    : 'Cart is Empty'
                }
                <h1>Total Amount: {totalAmount}</h1>
            </div>
    )
}

export default connect(mapStateToProps)(Cart);
