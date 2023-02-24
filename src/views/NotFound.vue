<template>
  <div>
    <el-empty description="页面去火星了">
      <el-button type="primary" @click="back" >按钮</el-button>
    </el-empty>
  </div>
</template>

<script>


export default {
  methods:{
    back(){
      this.$router.push("/")
    }
  }
};
</script>

<style lang="less" scoped>
</style>