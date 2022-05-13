import { defineStore } from 'pinia';

export const useWarehouseStore = defineStore('warehouseStore', {
  state: () => {
    return {
      warehouses: [],
    };
  },
});

export default useWarehouseStore;
