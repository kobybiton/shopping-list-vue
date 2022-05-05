<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    margin-bottom: 80px;
  }
</style>
