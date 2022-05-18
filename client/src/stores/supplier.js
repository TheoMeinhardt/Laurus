import { defineStore } from 'pinia';

export const useSupplierStore = defineStore('supplierStore', {
  state: () => {
    return {
      supplier: [],
    };
  },
});

export default useSupplierStore;
