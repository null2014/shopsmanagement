<template>
  <div class="app-container">
    <el-table
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序號" width="95">
        <template slot-scope="scope">
          {{ scope.$index+1 }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="商品名稱" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="商品價格" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="銷售價格" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.salePrice }}
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="editPro(scope.row.id)">
            編輯
          </el-button>
          <el-button size="mini" type="danger">
            刪除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: [{
        id: 5,
        name: 'HUAWEI P30',
        typeName: 'sss',
        price: 2800,
        salePrice: 3900,
        createTime: '2019-10-10 12:10:12',
        updateTime: '2019-10-10 13:10:12',
        createUser: 1,
        updataUser: 1
      },
      {
        id: 6,
        name: 'HUAWEI P30 Pro',
        typeName: 'sss',
        price: 3600,
        salePrice: 5299,
        createTime: '2019-10-10 12:10:12',
        updateTime: '2019-10-10 13:10:12',
        createUser: 1,
        updataUser: 1
      },
      {
        id: 10,
        name: 'iPhone 11',
        typeName: 'sss',
        price: 8000,
        salePrice: 9999,
        createTime: '2019-10-10 12:10:12',
        updateTime: '2019-11-10 13:10:12',
        createUser: 1,
        updataUser: 1
      }]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    editPro(id) {
      this.$router.push('/products/edit/'+ id,)
    },
    fetchData() {
      var vm = this
      this.axios({
        methods: 'GET',
        url: 'http://localhost:8090/product/list'
      }).then(function(response) {
        vm.list = response.data
      })
    }
  }
}
</script>
