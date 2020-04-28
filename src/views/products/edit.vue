<template>
  <div class="app-container">
    <el-form ref="form" :model="product" label-width="120px">
      <el-form-item label="商品名稱">
        <el-input v-model="product.name" />
      </el-form-item>
      <el-form-item label="商品價格">
        <el-input v-model="product.price" placeholder="please select your zone">
        </el-input>
      </el-form-item>
       <el-form-item>
        <el-button type="primary" @click="onSubmit">編輯</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 5,
        name: 'HUAWEI P30',
        typeName: 'sss',
        price: 2800,
        salePrice: 3900,
        createTime: '2019-10-10 12:10:12',
        updateTime: '2019-10-10 13:10:12',
        createUser: 1,
        updataUser: 1
      }
    }
  },
  created() {
    this.fetchDataById()
  },
  methods: {
    fetchDataById() {
      var id = this.$route.params.id
      var vm = this
      this.axios ({
        methods: 'GET',
        url: 'http://localhost:8090/product/getProductById?id=' + id
      }).then(function(response) {
        console.log(response)
        this.product = response.data
      })
    },
    onSubmit() {

    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

