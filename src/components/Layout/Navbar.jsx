import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User } from 'lucide-react';
import './Navbar.css';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="navbar-container glass">
            <div className="container nav-content">
                <Link to="/" className="nav-logo">
                    Boutique<span className="gradient-text">Boutique</span>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/categories">Categories</Link>
                </div>
                <div className="nav-icons">
                    <button className="icon-btn"><Search size={22} /></button>
                    <button className="icon-btn"><User size={22} /></button>
                    <Link to="/checkout" className="icon-btn cart-btn">
                        <ShoppingBag size={22} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
