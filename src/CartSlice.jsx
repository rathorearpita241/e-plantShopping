import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.find((item) => item.id === plant.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...plant, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((plant) => plant.id === id);
      if (!item) return;
      if (quantity <= 0) return state.filter((plant) => plant.id !== id);
      item.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
