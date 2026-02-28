import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/Product/ProductCard';
import { supabase } from '../../services/supabase';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Dummy products for initial academic demo if Supabase is not yet populated
    const dummyProducts = [
        { id: 1, name: 'Silk Midnight Dress', price: 120.00, category_name: 'Elegant' },
        { id: 2, name: 'Vortex Streetwear Hoodie', price: 85.00, category_name: 'Casual' },
        { id: 3, name: 'Classic Linen Trousers', price: 65.00, category_name: 'Summer' },
        { id: 4, name: 'Obsidian Leather Jacket', price: 210.00, category_name: 'Premium' },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*, categories(name)');

                if (data && data.length > 0) {
                    const formattedData = data.map(p => ({
                        ...p,
                        category_name: p.categories?.name || 'Uncategorized'
                    }));
                    setProducts(formattedData);
                } else {
                    setProducts(dummyProducts);
                }
            } catch (err) {
                setProducts(dummyProducts);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="shop-container fade-in">
            <div className="shop-header">
                <h1 className="title">Our <span className="gradient-text">Collection</span></h1>
                <p className="text-muted">Explore our latest arrivals and find your perfect style.</p>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Shop;
