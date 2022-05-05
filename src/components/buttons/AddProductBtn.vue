<template>
  <div class="btn">
    <span class="icon" @click="showModal = true">+</span>
    <span class="label">Add  Product</span>
  </div>
  <ProductFormModal v-show="showModal" @close-modal="showModal = false"></ProductFormModal>
</template>

<script>
import ProductFormModal from '../../components/ProductFormModal'

export default {
  name: 'AddProductBtn',
  components: {
    ProductFormModal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped lang="scss">
  .btn {
    color: #FF941A;
    text-align: left;
    .icon {
      position: relative;
      left: 41px;
      font-size: 30px;
      cursor: pointer;
    }
    .label {
      position: relative;
      left: 172px;
    }
  }
</style>
