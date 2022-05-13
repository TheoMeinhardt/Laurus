<template>
  <div>
    <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Warehouse</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.pid">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}€</td>
          <td @click="oneWarehouseOnly(warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).wid)" class="clickable">{{ warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).name }}</td>
          <td>
            <button @click="deleteProduct(product.pid)" type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-trash"></i></button>
            <deleteQuery></deleteQuery>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import useWarehouseStore from '@/stores/warehouses';
import useProductsStore from '@/stores/products';

import deleteQuery from '@/components/deleteQuery.vue';

const props = defineProps({
  wid: String,
});

const warehouseStore = useWarehouseStore();
const productsStore = useProductsStore();
const router = useRouter();
const products = ref([]);

loadProducts(props.wid);

watch(
  () => props.wid,
  (cur) => {
    loadProducts(cur);
  }
);

function loadProducts(id) {
  if (Number(id) === -1) {
    products.value = productsStore.products;
  } else {
    products.value = productsStore.products.filter(({ wid }) => wid === Number(id));
  }
}

async function updateProducts() {
  const { data: products } = await axios.get('http://localhost:3000/product');
  productsStore.products = products;

  loadProducts(props.wid);
}

async function deleteProduct(id) {
  const { data } = await axios.delete(`http://localhost:3000/product/${id}`);

  await updateProducts();
}

function oneWarehouseOnly(id) {
  router.push(`/products/${id}`);
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
