<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in BreadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row>
        <el-col :span="18">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
          </el-row>

          <el-row :gutter="24" class="mt" v-show="show">
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
            <el-col :span="8">
              <el-input></el-input>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <span class="el-dropdown-link" @click="change">
           {{ show?"收起":"展开" }}<i :class="`el-icon-arrow-${show?'up':'down'} el-icon--right`"></i>
          </span>
        </el-col>

        <el-col :span="4" class="tr">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
export default {
  mixins: [breadCrumb],
  data(){
    return{
      show:false
    }
  },
  methods:{
    change(){
      this.show=!this.show
    }
  }
};
</script>

<style lang="less" scoped>
</style>