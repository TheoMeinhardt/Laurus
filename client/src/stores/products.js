import { defineStore } from 'pinia';

export const useProductsStore = defineStore('productsStore', {
  state: () => {
    return {
      products: [],
    };
  },
  persist: true,
});

export default useProductsStore;
