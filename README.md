# Paradise Nursery 🌿

Paradise Nursery is a responsive online houseplant shopping application built with React, Redux Toolkit, and React Router. Browse curated indoor plant collections, add favourites to your cart, update quantities, and see your order total update instantly.

## Features
- Landing page with a full-screen botanical background image and **Get Started** call to action.
- About Us section describing the company and its values.
- Three plant categories with six products in each category.
- Product cards with images, descriptions, INR prices, and Add to Cart controls.
- Redux Toolkit cart state with `addItem`, `removeItem`, and `updateQuantity` reducers.
- Shared navigation with a live cart item count.
- Cart page with quantity controls, per-item totals, order total, remove controls, checkout notice, and continue shopping link.
- Responsive layout for desktop and mobile.

## Tech stack
- React 18 + Vite
- Redux Toolkit + React Redux
- React Router
- Lucide React icons
- CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
paradise-nursery/
├── index.html
├── package.json
├── README.md
└── src/
    ├── AboutUs.jsx
    ├── App.css
    ├── App.jsx
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── Navbar.jsx
    ├── ProductList.jsx
    ├── data.js
    ├── main.jsx
    └── store.js
```

## Note
Plant photographs are loaded from Unsplash image URLs and therefore require an internet connection to display.
