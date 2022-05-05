<template>
  <div class="btn">
    <span class="icon">+</span>
    <span class="label">Add  Product</span>
  </div>
</template>

<script>
export default {
  name: 'AddProductBtn'
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
