import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import PayPalButton from '../../components/Payment/PayPalButton';
import { ShoppingBag, ChevronLeft, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const { cart, removeFromCart, total } = useCart();
    const [clientInfo, setClientInfo] = useState({ name: '', email: '' });

    const handleInputChange = (e) => {
        setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
    };

    if (cart.length === 0) {
        return (
            <div className="empty-cart-container fade-in">
                <ShoppingBag size={80} className="text-muted" />
                <h2 className="title">Your cart is empty</h2>
                <p className="text-muted">Looks like you haven't added any products yet.</p>
                <Link to="/" className="btn-primary">Go to Shop</Link>
            </div>
        );
    }

    return (
        <div className="checkout-layout fade-in">
            <div className="checkout-main">
                <Link to="/" className="back-link"><ChevronLeft size={18} /> Back to Shop</Link>
                <h1 className="title">Checkout</h1>

                <div className="cart-list glass">
                    <h3>Your Order</h3>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-img-placeholder">{item.name.charAt(0)}</div>
                            <div className="item-details">
                                <span className="item-name">{item.name}</span>
                                <span className="item-qty">Qty: {item.quantity}</span>
                            </div>
                            <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={18} /></button>
                        </div>
                    ))}
                </div>

                <div className="client-form glass">
                    <h3>Customer Details</h3>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={clientInfo.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={clientInfo.email}
                            onChange={handleInputChange}
                            placeholder="Email Address"
                        />
                    </div>
                </div>
            </div>

            <div className="checkout-sidebar glass">
                <h3>Order Summary</h3>
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                    <span>Shipping</span>
                    <span className="gradient-text">FREE</span>
                </div>
                <div className="divider" />
                <div className="summary-row total-row">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>

                {clientInfo.name && clientInfo.email ? (
                    <PayPalButton amount={total} clientInfo={clientInfo} />
                ) : (
                    <p className="warning-text">Please complete your details to pay</p>
                )}
            </div>
        </div>
    );
};

export default Checkout;
