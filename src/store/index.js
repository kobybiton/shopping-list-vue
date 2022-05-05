import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      products: []
    }
  },
  mutations: {
    addProduct (state, payload) {
      state.products.push(payload)
    }
  },
  getters: {
    getProducts: state => state.products
  }
})
