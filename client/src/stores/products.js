import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('productsStore', {
  state: () => {
    return {
      products: ref([]),
    };
  },
});

export default useProductsStore;
