<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <form class="modal" @click.stop @submit.prevent="submit" >
      <div class="close" @click="$emit('close-modal')">
        x
      </div>
      <input v-model="formData.name" type="text" placeholder="Name" pattern="[A-Za-z]{1,10}" required>
      <input v-model="formData.price" type="text" placeholder="Price" pattern="[0-9]{1,4}" required>
      <textarea v-model="formData.description" cols="30" rows="10" placeholder="Description" required></textarea>
      <button class="add" type="submit"><BIconSendFill></BIconSendFill></button>
    </form>
  </div>
</template>

<script>
import { BIconSendFill } from 'bootstrap-icons-vue'
export default {
  name: 'AddProductFormModal',
  components: { BIconSendFill },
  data () {
    return {
      formData: []
    }
  },
  methods: {
    submit () {
      this.$store.commit('addProduct', this.formData)
      this.formData = []
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped lang="scss">
  .modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
    .modal {
      text-align: center;
      background-color: white;
      height: 500px;
      width: 500px;
      border-radius: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      input, textarea {
        padding: 8px;
        margin: 10px;
        border: none;
        border-bottom: 1px solid #E3E3E5;
        width: 214px;
        &:focus {
          outline: none;
        }
      }
      textarea {
        width: 464px;
        border: none;
      }
      .add {
        background-color: transparent;
        border: navajowhite;
        font-size: 20px;
        color: #FF941A;
        cursor: pointer;
        transform: rotate(45deg);
        display: block;
        position: absolute;
        right: 10px;
      }
    }
    .close {
      text-align: right;
      margin: 10px 15px;
      cursor: pointer;
    }
  }
</style>
