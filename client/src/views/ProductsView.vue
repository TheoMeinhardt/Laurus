<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped mt-5">
      <thead>
        <tr>
          <th @click="sortProducts(sortAsc)" scope="col" class="clickable">Product</th>
          <th scope="col">available</th>
          <th scope="col">Price</th>
          <th scope="col">Supplier</th>
          <th scope="col">Warehouse</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody v-if="props.wid == -1">
        <tr v-for="product of products" :key="product.pid">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}€</td>
          <td>{{ supplierStore.supplier.find(({ sid }) => sid === product.sid).name }}</td>
          <td @click="oneWarehouseOnly(warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).wid)" class="clickable">{{ warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).name }}</td>
          <td>
            <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteQueryModal"><i class="fa-solid fa-trash"></i></button>
            <deleteQuery @confirmDelete="deleteProduct(product.pid)"></deleteQuery>
          </td>
        </tr>
      </tbody>

      <tbody v-if="props.wid !== Number(-1)">
        <tr v-for="product of products.filter(({ wid }) => wid === Number(props.wid))" :key="product.pid">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}€</td>
          <td>{{ supplierStore.supplier.find(({ sid }) => sid === product.sid).name }}</td>
          <td @click="oneWarehouseOnly(warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).wid)" class="clickable">{{ warehouseStore.warehouses.find(({ wid: whid }) => whid === product.wid).name }}</td>
          <td>
            <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteQueryModal"><i class="fa-solid fa-trash"></i></button>
            <deleteQuery @confirmDelete="deleteProduct(product.pid)"></deleteQuery>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import useWarehouseStore from '@/stores/warehouses';
import useProductsStore from '@/stores/products';
import useSupplierStore from '@/stores/supplier';

import deleteQuery from '@/components/deleteQuery.vue';

const props = defineProps({
  wid: String,
});

const warehouseStore = useWarehouseStore();
const productsStore = useProductsStore();
const supplierStore = useSupplierStore();
const router = useRouter();
const products = ref([]);
let sortAsc = ref(true);

sortProducts(true);
products.value = productsStore.products;

onMounted(() => {
  products.value = productsStore.products;
});

async function updateProducts() {
  const { data } = await axios.get('http://localhost:3000/product');
  products.value = data;
}

async function deleteProduct(id) {
  await axios.delete(`http://localhost:3000/product/${id}`);
  updateProducts();
}

function oneWarehouseOnly(id) {
  router.push(`/products/${id}`);
}

function sortProducts(asc) {
  products.value.sort((a, b) => {
    if (a.name < b.name) {
      return asc ? -1 : 1;
    }
    if (a.name > b.name) {
      return asc ? 1 : -1;
    }
    return 0;
  });

  sortAsc.value = !sortAsc.value;
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>
