<template>
  <div class="list" v-for="(product, id) in products" :key="id">
    <div class="order">{{ id+1 }}</div>
    <div class="product-approval" :class="approvedProduct.indexOf(id) >= 0 ? 'marked': ''" @click="productDescription(product.description)">
      <span>{{ product.name }}</span> <span class="price">{{ product.price }}</span><span>NIS</span>
    </div>
    <div class="approve-product"><ApproveProductBtn :id="id" @toggleMark="toggleMark"></ApproveProductBtn></div>
    <div class="delete-product"><DeleteProductBtn :id="id" @deleteProduct="deleteProduct"></DeleteProductBtn></div>
  </div>
  <div class="list-footer">
    <div class="total" v-if="products.length">
      <span class="label">Total:</span>
      <span class="amount">{{ totalAmount }} NIS</span>
    </div>
    <AddProductBtn></AddProductBtn>
  </div>
</template>

<script>
import DeleteProductBtn from '../components/buttons/DeleteProductBtn'
import ApproveProductBtn from '../components/buttons/ApproveProductBtn'
import AddProductBtn from '../components/buttons/AddProductBtn'

export default {
  name: 'List',
  components: {
    DeleteProductBtn,
    ApproveProductBtn,
    AddProductBtn
  },
  data () {
    return {
      approvedProduct: []
    }
  },
  computed: {
    products () {
      return this.$store.getters.getProducts
    },
    totalAmount () {
      let sum = 0
      this.products.forEach(product => {
        sum += Number(product.price)
      })
      return sum
    }
  },
  methods: {
    productDescription (description) {
      this.$router.push({
        name: 'Product',
        params: { description }
      })
    },
    toggleMark (id) {
      const index = this.approvedProduct.indexOf(id)

      if (index < 0) {
        this.approvedProduct.push(id)
      } else {
        this.approvedProduct.splice(index, 1)
      }
    },
    deleteProduct (id) {
      this.products.splice(id, 1)
    }
  },
  mounted () {
    // console.log(this.$store.getters.getProducts)
  }
}
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid #E3E3E5;
    margin-bottom: 20px;
    div {
      width: 200px;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      color: #585666;
      &.order {
        width: 100px;
        color: #FF941A;
        border-right: 1px solid #E3E3E5;
        margin: -1px 25px 0 0
      }
      &.product-approval {
        cursor: pointer;
        word-spacing: 105px;
        width: 400px;
        .price {
          margin-right: 5px;
        }
        &.marked {
          text-decoration: line-through;
          text-decoration-thickness: 1px;
          text-decoration-color: #E3E3E5;
          span {
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          }
        }
      }
      &.approve-product {
        width: 100px;
      }
      &.delete-product {
        width: 100px;
        border-left: 1px solid #E3E3E5;
        margin: 10px 0px;
        line-height: 39px;
      }
    }
  }
  .list-footer {
    .total {
      margin: 20px 0 50px 0;
      .label {
        position: relative;
        right: 102px;
      }
      .amount {
        position: relative;
        left: 32px;
      }
    }
  }
</style>
