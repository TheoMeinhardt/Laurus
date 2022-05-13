<template>
  <div class="container d-flex justify-content-center mt-5">
    <div v-for="warehouse of warehouseStore.warehouses" class="card mx-3" style="width: 18rem" :key="warehouse.wid">
      <img :src="`/public/images/${warehouse.image}`" class="card-img-top" :alt="`warehouse ${warehouse.name}`" />
      <div class="card-body">
        <h5 class="card-title">{{ warehouse.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ warehouse.address }}</h6>
        <RouterLink :to="`/products/${warehouse.wid}`" class="btn btn-outline-primary mt-4">Details</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import useWarehouseStore from '../stores/warehouses';

const warehouseStore = useWarehouseStore();
</script>

<style scoped>
img {
  height: 28vh;
  object-fit: cover;
}
</style>
