<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

import useWarehouseStore from './stores/warehouses';
import useProductsStore from './stores/products';
import useSupplierStore from './stores/supplier';

const warehouseStore = useWarehouseStore();
const productsStore = useProductsStore();
const supplierStore = useSupplierStore();

onMounted(async () => {
  const { data: warehouses } = await axios.get('http://localhost:3000/warehouse');
  const { data: supplier } = await axios.get('http://localhost:3000/supplier');
  const { data: products } = await axios.get('http://localhost:3000/product');

  warehouseStore.warehouses = warehouses;
  productsStore.products = products;
  supplierStore.supplier = supplier;
});
</script>

<template>
  <div class="container text-center">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border border-2 border-top-0 rounded-bottom" style="background-color: #e3f2fd">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Warehouses</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products/-1" class="nav-link">Products</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div><RouterView /></div>
  </div>
</template>

<style scoped>
nav {
  background-color: white;
}
</style>
