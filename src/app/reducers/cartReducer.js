import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
quantity: 1,
        showCart: false

    },
    reducers: {

   toggleCart: (state) => {
       state.showCart = !state.showCart
   },
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            state.quantity = state.quantity + 1

        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
            state.quantity = state.quantity - 1
            },

        removeAll: (state, action) => {

            state.cart = [];
        },


    },
});

export const { toggleCart,addToCart, removeAll, incrementQuantity, decrementQuantity } = categoriesSlice.actions;
export default categoriesSlice.reducer;