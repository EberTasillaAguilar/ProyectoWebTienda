import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card glass fade-in">
            <div className="product-image-container">
                <div className="product-placeholder">
                    {product.name.charAt(0)}
                </div>
                <div className="product-actions">
                    <button className="icon-btn-rounded glass" onClick={() => addToCart(product)}>
                        <ShoppingCart size={18} />
                    </button>
                    <button className="icon-btn-rounded glass">
                        <Eye size={18} />
                    </button>
                </div>
            </div>
            <div className="product-info">
                <span className="product-category">{product.category_name}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    <button className="add-btn" onClick={() => addToCart(product)}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
