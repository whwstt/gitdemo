<template>
  <div>
    <h1 class="title">邦达国际物流平台</h1>
    <el-scrollbar>
      <el-aside class="side">
      <el-menu :router="true"
                background-color="#001529"
                text-color="#fff"
                >
                
        <menus-vue v-for="(item,index) in menuData" :menu="item" :key="index"></menus-vue>
      </el-menu>
   </el-aside>
    </el-scrollbar>
    
  </div>
</template>

<script>
import {get} from "@/utils/http"
import MenusVue from "@/components/MenusVue.vue"
export default {
  data(){
    return{
      menuData:[]
    }
  },
  created(){
    this.getMenu()
  },
  methods:{
     //获取菜单项
    async getMenu(){
      let {data}=await get("/menu")
      console.log(data);
      this.menuData=data
     }
  },
  components:{
    MenusVue
  }
};
</script>

<style lang="less" scoped>
.el-aside::-webkit-scrollbar {
     display: none;}
.title{
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.side{
  overflow-y: scroll;
  overflow-x: hidden;
}





</style>