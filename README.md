# e-plantShopping – Paradise Nursery

Paradise Nursery is an online houseplant shopping application built with React, Redux Toolkit, and Vite. Customers can browse houseplants in three categories, add plants to a shopping cart, change quantities, remove items, and view the updated order total.

## Features
- Paradise Nursery landing page with a botanical background image.
- Welcome heading and Get Started button to open the product listing.
- About Us information about Paradise Nursery.
- Three plant categories with at least six unique plants in each category.
- Plant thumbnails, names, descriptions, and prices.
- Add to Cart buttons that become disabled and display Added to Cart after selection.
- Navigation links for Home, Plants, and Cart.
- Dynamic shopping-cart item count.
- Redux reducers: `addItem()`, `removeItem()`, and `updateQuantity()`.
- Cart page with item images, names, unit prices, quantities, item totals, and overall total.
- Increment, decrement, and Delete controls.
- Checkout message and Continue Shopping navigation.

## Technologies
- React 18
- Redux Toolkit and React Redux
- Vite
- CSS
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

## Project structure

```text
e-plantShopping/
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
