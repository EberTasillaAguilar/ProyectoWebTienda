import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Shop from './pages/Shop/Shop';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
        Boutique Boutique © {new Date().getFullYear()} - Academic Project
      </footer>
    </div>
  );
}

export default App;
