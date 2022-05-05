<template>
  <div class="description">
    <router-link to="/">Return to ShoppingList</router-link>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      description: ''
    }
  },
  mounted () {
    this.description = this.$route.params.description
  }
}
</script>

<style lang="scss" scoped>

</style>
