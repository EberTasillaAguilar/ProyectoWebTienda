import { ArrowRight, ShoppingBag, CheckCircle } from 'lucide-react';
import CategorySection from '../../components/Product/CategorySection';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <section className="hero-section">
                <div className="hero-content">
                    <div className="badge glass">
                        <span className="gradient-text"><CheckCircle size={14} /> New Season 2026</span>
                    </div>
                    <h1 className="title">Premium Fashion for the <span className="gradient-text">Modern Individual.</span></h1>
                    <p className="hero-description text-muted">
                        Discover a curated collection of high-quality apparel designed for comfort and style. Seamlessly integrated with Supabase and secure PayPal checkout.
                    </p>
                    <div className="hero-actions">
                        <Link to="/shop" className="btn-primary">
                            Explore Shop <ArrowRight size={18} />
                        </Link>
                        <button className="btn-outline glass">
                            View Categories <ShoppingBag size={18} />
                        </button>
                    </div>
                </div>
                <div className="hero-visual glass">
                    <div className="placeholder-image gradient-overlay">
                        <span className="gradient-text" style={{ fontSize: '3rem', fontWeight: 900 }}>BOUTIQUE</span>
                    </div>
                </div>
            </section>

            <CategorySection />

            <section className="cta-section glass">
                <h2 className="title" style={{ fontSize: '2rem' }}>Ready to upgrade <span className="gradient-text">your wardrobe?</span></h2>
                <p className="text-muted">Join our community and get early access to new drops.</p>
                <div style={{ marginTop: '2rem' }}>
                    <button className="btn-primary">Join Now</button>
                </div>
            </section>
        </div>
    );
};

export default Home;
