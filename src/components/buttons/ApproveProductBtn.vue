<template>
  <span :id="id" @click="toggleMark"><BIconPencilFill></BIconPencilFill></span>
</template>

<script>
import { BIconPencilFill } from 'bootstrap-icons-vue'
export default {
  name: 'ApproveProductBtn',
  components: { BIconPencilFill },
  props: {
    id: {
      type: Number
    }
  },
  data () {
    return {
      approvedTask: false
    }
  },
  methods: {
    toggleMark () {
      this.$emit('toggleMark', this.id)
    }
  }
}
</script>

<style scoped>
  span {
    cursor: pointer;
  }
</style>
