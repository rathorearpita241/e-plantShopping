import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, ShoppingBag } from 'lucide-react';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-mark"><Leaf size={21} /></span><span>paradise<span className="brand-light">nursery</span></span></Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart" className="cart-link"><ShoppingBag size={18} /> Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  );
}
