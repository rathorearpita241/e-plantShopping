import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Leaf, Sprout } from 'lucide-react';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Home() {
  return <><main className="hero"><div className="hero-overlay"/><div className="hero-content"><span className="eyebrow"><Leaf size={15}/> YOUR HAPPY PLACE, IN FULL BLOOM</span><h1>Bring home<br/><em>a little</em> paradise.</h1><p>Thoughtful plants for slower mornings, brighter corners, and a home that feels a little more alive.</p><Link to="/plants" className="primary-button">Get Started <ArrowRight size={18}/></Link><div className="hero-note"><Sprout size={17}/> Find your new favourite leafy friend</div></div><div className="hero-caption">GROW YOUR HAPPY PLACE <span>— EST. WITH LOVE</span></div></main><AboutUs/><section className="home-cta"><p>GOOD THINGS GROW HERE</p><h2>Make room for more green.</h2><Link to="/plants" className="text-link">Explore the collection <ArrowRight size={17}/></Link></section></>;
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return <div className="app-shell">{!isHome && <Navbar/>}{isHome && <div className="home-nav"><Navbar/></div>}<Routes><Route path="/" element={<Home/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="*" element={<Home/>}/></Routes><footer className="footer"><span>© 2026 Paradise Nursery</span><span>Grown with care <Leaf size={14}/></span></footer></div>;
}
