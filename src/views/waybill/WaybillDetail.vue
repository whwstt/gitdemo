<template>
  <div>
    <el-card> 我是详情页 <el-button @click="back">返回</el-button></el-card>
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.push("/waybill/list")
    }
  },
  beforeRouteLeave(to,from,next){
    if(to.path=="/waybill/list"){
      from.meta.keepAlive=true
    }else{
      from.meta.keepAlive=false
      
    }
    next()
  },
};
</script>

<style lang="less" scoped>
</style>