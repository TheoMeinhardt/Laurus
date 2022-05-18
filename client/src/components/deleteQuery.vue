<template>
  <div class="modal fade" id="deleteQueryModal" tabindex="-1" aria-labelledby="deleteQueryModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">Are you sure, you want to delete this Product?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button @click="emits('confirmDelete')" type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['confirmDelete']);
</script>
