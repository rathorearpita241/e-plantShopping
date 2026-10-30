import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Check, Leaf, ShoppingBag } from 'lucide-react';
import { addItem } from './CartSlice.jsx';


// Three categories, each containing six unique houseplants.
const categories = [
  { id: 'air-purifying', name: 'Air Purifying Plants', subtitle: 'Freshen your indoor spaces' },
  { id: 'low-maintenance', name: 'Low Maintenance Plants', subtitle: 'Easy care for busy lives' },
  { id: 'succulents', name: 'Succulents and Cacti', subtitle: 'Small plants with personality' },
];

const plants = [
  { id: 1, name: 'Snake Plant', category: 'air-purifying', cost: 399, description: 'A hardy upright plant with striking sword-shaped leaves.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=700&q=85' },
  { id: 2, name: 'Peace Lily', category: 'air-purifying', cost: 549, description: 'Elegant white flowers and glossy deep-green leaves.', image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c8b?w=700&q=85' },
  { id: 3, name: 'Areca Palm', category: 'air-purifying', cost: 799, description: 'A tropical palm that brings a breezy feel to your home.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700&q=85' },
  { id: 4, name: 'Rubber Plant', category: 'air-purifying', cost: 699, description: 'Bold glossy leaves make this plant a natural statement piece.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&q=85' },
  { id: 5, name: 'Boston Fern', category: 'air-purifying', cost: 449, description: 'Soft arching fronds add texture to shelves and hanging pots.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=700&q=85' },
  { id: 6, name: 'Golden Pothos', category: 'air-purifying', cost: 299, description: 'A trailing favourite with heart-shaped variegated leaves.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700&q=85' },
  { id: 7, name: 'ZZ Plant', category: 'low-maintenance', cost: 499, description: 'Glossy leaves and a forgiving nature make care simple.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?w=700&q=85' },
  { id: 8, name: 'Monstera Deliciosa', category: 'low-maintenance', cost: 899, description: 'Iconic split leaves create a beautiful tropical focal point.', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=700&q=85' },
  { id: 9, name: 'Jade Plant', category: 'low-maintenance', cost: 349, description: 'A cheerful succulent with rounded, fleshy green leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700&q=85' },
  { id: 10, name: 'Chinese Evergreen', category: 'low-maintenance', cost: 599, description: 'Patterned foliage that brings colour to indoor corners.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=700&q=85' },
  { id: 11, name: 'Spider Plant', category: 'low-maintenance', cost: 279, description: 'Easy-going striped leaves with playful cascading plantlets.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=700&q=85' },
  { id: 12, name: 'Dracaena', category: 'low-maintenance', cost: 649, description: 'A graceful upright plant with a modern silhouette.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=700&q=85' },
  { id: 13, name: 'Echeveria', category: 'succulents', cost: 199, description: 'A compact rosette succulent in soft pastel tones.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700&q=85' },
  { id: 14, name: 'Aloe Vera', category: 'succulents', cost: 249, description: 'A sun-loving succulent with useful fleshy leaves.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=700&q=85' },
  { id: 15, name: 'Bunny Ear Cactus', category: 'succulents', cost: 229, description: 'A charming cactus with rounded paddle-shaped stems.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc4a?w=700&q=85' },
  { id: 16, name: 'Haworthia', category: 'succulents', cost: 189, description: 'A petite architectural succulent for desks and shelves.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc4a?w=700&q=85' },
  { id: 17, name: 'Barrel Cactus', category: 'succulents', cost: 299, description: 'A round sun-lover with classic desert character.', image: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=700&q=85' },
  { id: 18, name: 'String of Pearls', category: 'succulents', cost: 399, description: 'Delicate bead-like leaves spill beautifully over pots.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=700&q=85' },
];

export default function ProductList({ setShowCart, setShowProductList, goHome }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState({});
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((previous) => ({ ...previous, [plant.name]: true }));
  };

  return (
    <div className="app-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={(event) => { event.preventDefault(); goHome(); }}><span className="brand-mark"><Leaf size={21} /></span><span>paradise<span className="brand-light">nursery</span></span></a>
        <nav>
          <button type="button" onClick={goHome}>Home</button>
          <button type="button" onClick={() => setShowProductList(true)}>Plants</button>
          <button type="button" className="cart-link" onClick={() => setShowCart(true)}><ShoppingBag size={18} /> Cart <span className="cart-count">{cartQuantity}</span></button>
        </nav>
      </header>

      <main className="catalog-page">
        <section className="catalog-heading">
          <div><span className="eyebrow">THE GREENHOUSE</span><h1>Find your <em>kind</em> of green.</h1><p>Meet the plants that make a house feel like home.</p></div>
          <button type="button" className="catalog-cart" onClick={() => setShowCart(true)}><ShoppingBag size={18} /> View your cart ({cartQuantity})</button>
        </section>
        <div className="category-tabs">
          {categories.map((category) => <a key={category.id} href={`#${category.id}`}><span>{category.name}</span><small>{category.subtitle}</small></a>)}
        </div>
        {categories.map((category) => {
          const categoryPlants = plants.filter((plant) => plant.category === category.id);
          return (
            <section className="plant-category" id={category.id} key={category.id}>
              <div className="category-title"><div><span className="eyebrow">CURATED COLLECTION</span><h2>{category.name}</h2></div><span>{categoryPlants.length} leafy favourites</span></div>
              <div className="plant-grid">
                {categoryPlants.map((plant) => (
                  <article className="plant-card" key={plant.id}>
                    <div className="plant-image-wrap"><img src={plant.image} alt={plant.name} loading="lazy" /><span className="plant-tag">GREEN PICK</span></div>
                    <div className="plant-info"><div><h3>{plant.name}</h3><p>{plant.description}</p></div>
                      <div className="plant-buy"><strong>₹{plant.cost.toLocaleString('en-IN')}</strong>
                        <button className="add-button" type="button" disabled={addedToCart[plant.name]} onClick={() => handleAddToCart(plant)}>
                          {addedToCart[plant.name] ? <><Check size={16} /> Added to Cart</> : <><ShoppingBag size={16} /> Add to Cart</>}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <footer className="footer"><span>© 2026 Paradise Nursery</span><span>Grown with care <Leaf size={14} /></span></footer>
    </div>
  );
}
