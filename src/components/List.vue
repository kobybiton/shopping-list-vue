<template>
  <div class="list" v-for="(product, id) in productsList" :key="id">
    <div class="order">{{ id+1 }}</div>
    <div class="product-approval" :class="approvedProduct.indexOf(id) >= 0 ? 'marked': ''">
      <span>{{ product.name }}</span> <span class="price">{{ product.price }}</span><span>NIS</span>
    </div>
    <div class="approve-product"><ApproveProductBtn :id="id" @toggleMark="toggleMark"></ApproveProductBtn></div>
    <div class="delete-product"><DeleteProductBtn></DeleteProductBtn></div>
  </div>
  <div class="list-footer">
    <div class="total">
      <span class="label">Total:</span>
      <span class="amount">55 NIS</span>
    </div>
    <AddProductBtn @product="addProduct"></AddProductBtn>
  </div>
</template>

<script>
import DeleteProductBtn from '../components/buttons/DeleteProductBtn'
import ApproveProductBtn from '../components/buttons/ApproveProductBtn'
import AddProductBtn from '../components/buttons/AddProductBtn'

export default {
  name: 'List',
  data () {
    return {
      productsList: [],
      approvedProduct: []
    }
  },
  components: {
    DeleteProductBtn,
    ApproveProductBtn,
    AddProductBtn
  },
  methods: {
    toggleMark (id) {
      const index = this.approvedProduct.indexOf(id)

      if (index < 0) {
        this.approvedProduct.push(id)
      } else {
        this.approvedProduct.splice(index, 1)
      }
    },
    addProduct (product) {
      this.productsList.push(product)
    }
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
