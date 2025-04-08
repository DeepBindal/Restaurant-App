import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cart');
    const parsed = data ? JSON.parse(data) : null;

    // Ensure structure is valid
    if (
      parsed &&
      Array.isArray(parsed.items) &&
      typeof parsed.totalQuantity === 'number' &&
      typeof parsed.totalPrice === 'number'
    ) {
      return parsed;
    }

    return null;
  } catch (err) {
    console.warn("Failed to load cart from localStorage. Resetting.");
    return null;
  }
};


const saveCartToLocalStorage = (state) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save cart to localStorage", err);
  }
};

const defaultState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const initialState = loadCartFromLocalStorage() || defaultState;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;

      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);

      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items = state.items.filter(i => i.id !== itemId);
      }

      saveCartToLocalStorage(state);
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(i => i.id === itemId);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else {
        cartSlice.caseReducers.removeFromCart(state, { payload: itemId });
        return; 
      }

      saveCartToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
