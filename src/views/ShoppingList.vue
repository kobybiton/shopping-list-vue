<template>
  <div class="container">
    <Header title="Shopping List"/>
    <List></List>
  </div>
</template>

<script>
import Header from '../components/Header'
import List from '../components/List'

export default {
  name: 'ShoppingList',
  components: {
    Header,
    List
  }
}
</script>

<style>
 .container {
   width: 700px;
   margin: auto;
 }
</style>
