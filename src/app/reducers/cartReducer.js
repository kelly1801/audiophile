import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 1,
    showCart: false,
    total: 0,
    shipping: 50,
    vat: 0,
    grandTotal: 0,
    isPay: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.showCart = !state.showCart;
    },
    togglePayAlert: (state) => {
      state.isPay = !state.isPay;
    },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.quantity = state.quantity + 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
      state.quantity = state.quantity - 1;
    },

    removeAll: (state) => {
      state.cart = [];
    },
    getTotal: (state) => {
      state.total = state.cart.map(item => {
        const price = item.price
        const quantity = item.quantity
        return price * quantity
      }).reduce((item1, item2) => item1 + item2, 0)

      state.vat = 20 * state.total / 100;
      state.grandTotal = state.total + state.shipping + state.vat
    }

  },
});

export const {
  toggleCart,
  togglePayAlert,
  addToCart,
  removeAll,
  incrementQuantity,
  decrementQuantity,
  getTotal

} = categoriesSlice.actions;
export default categoriesSlice.reducer;
