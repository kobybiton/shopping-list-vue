<template>
  <span :id="id" @click="deleteProduct"><BIconTrash3Fill></BIconTrash3Fill></span>
</template>

<script>
import { BIconTrash3Fill } from 'bootstrap-icons-vue'
export default {
  name: 'DeleteProductBtn',
  components: { BIconTrash3Fill },
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    deleteProduct () {
      this.$emit('deleteProduct', this.id)
    }
  }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
