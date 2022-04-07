export default {
  // it looks like we arrive here from the index.js then return what we to use in the rest of our app
  // getters are similar to computed properties, taking in the state as the first argument and returning 
  // our data from the index.js
  products(state) {
    return state.products;
  },
  totalSum(state) {
    return state.total;
  },
  quantity(state) {
    return state.qty;
  },
  cart(state) {
    return state.cart;
  }
};