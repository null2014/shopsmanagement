<template>
  <div class="app-container">
    <el-form ref="form" :model="productData" label-width="120px" size="mini">
      <el-form-item label="商品名稱" prop="name">
        <el-input v-model="productData.name" />
      </el-form-item>
      <el-form-item label="商品價格" prop="price">
        <el-input v-model="productData.price" placeholder="please select your zone" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">編輯</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getList } from '@/api/product'

export default {
  data() {
    return {
      productData: [],
      list: []
    }
  },
  created() {
    this.fetchDataById()
  },
  methods: {
    fetchDataById() {
      var id = this.$route.params.id
      getList().then(response => {
        this.list = response.data.items
        console.log(this.list)
        for (const index in this.list) {
          if (this.list[index].id === id) {
            this.productData = this.list[index]
            console.log('product:', productData)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

