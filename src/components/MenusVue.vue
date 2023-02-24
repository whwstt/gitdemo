<template>
  <div>
    <el-submenu v-if="menu.children" :index="menu.url">
      <template slot="title">
        <i :class="menu.icon"></i>
       <span slot="title">{{ menu.name }}</span>
      </template>
      <nav-menu v-for="(item,index) in menu.  children" :menu="item" :key="index" class="mitem"></nav-menu>
    </el-submenu>
    <el-menu-item v-else :index="menu.url" class="mitem">
      <i :class="menu.icon"></i>
      <span slot="title">{{ menu.name }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "NavMenu", //组件自己掉自己的时候才有用（递归）
  props: {
    menu: {
      typeof: Object,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
.mitem{
  width:200px

}
</style>