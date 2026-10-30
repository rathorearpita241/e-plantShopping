import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { addItem } from './CartSlice.jsx';
import { categories, plants } from './data.js';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = id => cartItems.some(item => item.id === id);
  return <main className="catalog-page"><section className="catalog-heading"><div><span className="eyebrow">THE GREENHOUSE</span><h1>Find your <em>kind</em> of green.</h1><p>Meet the plants that make a house feel like home.</p></div><Link to="/cart" className="catalog-cart"><ShoppingBag size={18}/> View your cart <ArrowRight size={16}/></Link></section>
    <div className="category-tabs">{categories.map(category => <a key={category.id} href={`#${category.id}`}><span>{category.name}</span><small>{category.subtitle}</small></a>)}</div>
    {categories.map(category => <section className="plant-category" id={category.id} key={category.id}><div className="category-title"><div><span className="eyebrow">CURATED COLLECTION</span><h2>{category.name}</h2></div><span>{plants.filter(p => p.category === category.id).length} leafy favourites</span></div><div className="plant-grid">{plants.filter(p => p.category === category.id).map(plant => <article className="plant-card" key={plant.id}><div className="plant-image-wrap"><img src={plant.image} alt={plant.name} loading="lazy"/><span className="plant-tag">GREEN PICK</span></div><div className="plant-info"><div><h3>{plant.name}</h3><p>{plant.description}</p></div><div className="plant-buy"><strong>₹{plant.price.toLocaleString('en-IN')}</strong><button className={`add-button ${isAdded(plant.id) ? 'added' : ''}`} disabled={isAdded(plant.id)} onClick={() => dispatch(addItem(plant))}>{isAdded(plant.id) ? <><Check size={16}/> Added</> : <><ShoppingBag size={16}/> Add to Cart</>}</button></div></div></article>)}</div></section>)}
  </main>;
}
