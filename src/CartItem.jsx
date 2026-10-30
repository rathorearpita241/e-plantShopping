import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, Leaf } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  return <main className="cart-page"><div className="cart-heading"><div><span className="eyebrow">YOUR LITTLE GREEN CORNER</span><h1>Shopping <em>cart.</em></h1><p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} ready to find a home</p></div><Link to="/plants" className="back-link"><ArrowLeft size={17}/> Continue shopping</Link></div>
    {items.length === 0 ? <section className="empty-cart"><div className="empty-icon"><Leaf size={36}/></div><h2>Your cart is still growing.</h2><p>There are plenty of lovely leaves waiting to come home with you.</p><Link to="/plants" className="primary-button">Explore plants <ArrowLeft size={17}/></Link></section> : <div className="cart-layout"><section className="cart-items">{items.map(item => <article className="cart-row" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-product"><h3>{item.name}</h3><p>₹{item.price.toLocaleString('en-IN')} <span>per plant</span></p><button className="remove-button" onClick={() => dispatch(removeItem(item.id))}><Trash2 size={14}/> Remove</button></div><div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity - 1}))}><Minus size={15}/></button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id: item.id, quantity: item.quantity + 1}))}><Plus size={15}/></button></div><strong className="line-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong></article>)}</section>
    <aside className="order-summary"><span className="eyebrow">A LITTLE SUMMARY</span><h2>Order total</h2><div className="summary-line"><span>Plants ({totalItems})</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><div className="summary-line"><span>Delivery</span><strong className="free-label">FREE</strong></div><div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><button className="checkout-button" onClick={() => window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.')}>Checkout <ArrowLeft className="checkout-arrow" size={17}/></button><p className="secure-note">A greener home is just around the corner.</p></aside></div>}
  </main>;
}
