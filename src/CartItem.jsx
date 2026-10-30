import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, Leaf, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem({ setShowCart, setShowProductList, goHome }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.cost * item.quantity, 0);

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const continueShopping = () => {
    setShowCart(false);
    setShowProductList(true);
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={(event) => { event.preventDefault(); goHome(); }}><span className="brand-mark"><Leaf size={21} /></span><span>paradise<span className="brand-light">nursery</span></span></a>
        <nav>
          <button type="button" onClick={goHome}>Home</button>
          <button type="button" onClick={continueShopping}>Plants</button>
          <button type="button" className="cart-link" onClick={() => setShowCart(true)}><ShoppingBag size={18} /> Cart <span className="cart-count">{cartQuantity}</span></button>
        </nav>
      </header>

      <main className="cart-page">
        <div className="cart-heading"><div><span className="eyebrow">YOUR LITTLE GREEN CORNER</span><h1>Shopping <em>cart.</em></h1><p>{cartQuantity} {cartQuantity === 1 ? 'plant' : 'plants'} ready to find a home</p></div>
          <button type="button" className="back-link" onClick={continueShopping}><ArrowLeft size={17} /> Continue Shopping</button>
        </div>

        {cart.length === 0 ? (
          <section className="empty-cart"><div className="empty-icon"><Leaf size={36} /></div><h2>Your cart is still growing.</h2><p>There are plenty of lovely leaves waiting to come home with you.</p><button className="primary-button" type="button" onClick={continueShopping}>Explore plants <ArrowLeft size={17} /></button></section>
        ) : (
          <div className="cart-layout">
            <section className="cart-container cart-items">
              {cart.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product"><h3>{item.name}</h3><p>₹{item.cost.toLocaleString('en-IN')} <span>per plant</span></p><button className="remove-button" type="button" onClick={() => handleRemove(item)}><Trash2 size={14} /> Delete</button></div>
                  <div className="quantity-control"><button type="button" aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}><Minus size={15} /></button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}><Plus size={15} /></button></div>
                  <strong className="line-total">₹{(item.cost * item.quantity).toLocaleString('en-IN')}</strong>
                </article>
              ))}
            </section>
            <aside className="order-summary"><span className="eyebrow">A LITTLE SUMMARY</span><h2>Order total</h2><div className="summary-line"><span>Plants ({cartQuantity})</span><strong>₹{totalAmount.toLocaleString('en-IN')}</strong></div><div className="summary-line"><span>Delivery</span><strong className="free-label">FREE</strong></div><div className="summary-total"><span>Total</span><strong>₹{totalAmount.toLocaleString('en-IN')}</strong></div><button className="checkout-button" type="button" onClick={() => window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.')}>Checkout <ArrowLeft className="checkout-arrow" size={17} /></button><p className="secure-note">A greener home is just around the corner.</p></aside>
          </div>
        )}
      </main>
      <footer className="footer"><span>© 2026 Paradise Nursery</span><span>Grown with care <Leaf size={14} /></span></footer>
    </div>
  );
}
