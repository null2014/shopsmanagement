<template>
  <div class="app=container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="margin-bottom:20px;">
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品ID" width="200">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品名稱">
        <template slot-scope="scope">
          {{ scope.row.typeName }}
        </template>
      </el-table-column>
       <el-table-column label="商品價格" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="銷售價格" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.salePrice }}
        </template>
      </el-table-column>
    </el-table>
    <el-button :loading="downloadLoading" style="margin-bottom:20px;" type="primary" icon="el-icon-document" @click="handleDownload">導出zip</el-button>
  </div>
</template>

<script>
import { getList } from '@/api/product'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(res => {
        this.list = res.data.items
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Zip').then(zip => {
        const tHeader = ['Id', 'typeName', 'price', 'salePrice']
        const filterVal = ['id', 'typeName', 'price', 'salePrice']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        zip.export_txt_to_zip(tHeader, data, this.filename, this.filename)
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style>

</style>
