<template>
  <div class="app-container">
    <aside style="margin-top:15px;">
    下載pdf
    </aside>
    <router-link target="_blank" to="/pdf/download">
      <el-button type="primary" @click="clickBtn">
        下載pdf
      </el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    clickBtn() {
      console.log(this.$route)
    }
  }
}
</script>
