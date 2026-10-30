import React, { useState } from 'react';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const goHome = () => {
    setShowProductList(false);
    setShowCart(false);
  };

  if (showCart) {
    return <CartItem setShowCart={setShowCart} setShowProductList={setShowProductList} goHome={goHome} />;
  }

  if (showProductList) {
    return <ProductList setShowCart={setShowCart} setShowProductList={setShowProductList} goHome={goHome} />;
  }

  return (
    <div className="app-shell">
      <main className="hero background-image">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow"><Leaf size={15} /> YOUR HAPPY PLACE, IN FULL BLOOM</span>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Bring home beautiful plants, brighten your rooms, and make every corner feel closer to nature.</p>
          <button className="primary-button" onClick={() => setShowProductList(true)}>
            Get Started <ArrowRight size={18} />
          </button>
          <div className="hero-note"><Sprout size={17} /> Find your new favourite leafy friend</div>
        </div>
        <div className="hero-caption">GROW YOUR HAPPY PLACE <span>— EST. WITH LOVE</span></div>
      </main>
      <AboutUs />
      <footer className="footer"><span>© 2026 Paradise Nursery</span><span>Grown with care <Leaf size={14} /></span></footer>
    </div>
  );
}

export default App;
