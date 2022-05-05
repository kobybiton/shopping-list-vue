<template>
  <span><BIconTrash3Fill></BIconTrash3Fill></span>
</template>

<script>
import { BIconTrash3Fill } from 'bootstrap-icons-vue'
export default {
  name: 'DeleteProductBtn',
  components: { BIconTrash3Fill }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
