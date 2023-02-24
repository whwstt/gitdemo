<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in BreadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="mt">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-input v-model="params.waybillNo" placeholder="请输入运单号" :v-model="params.no"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="params.name" placeholder="请输入客户名" :v-model="params.name"></el-input>
        </el-col>
        <el-col :span="6">
          <el-date-picker
          v-model="params.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 100%;"
            > 
            </el-date-picker> 
        </el-col>
        <el-col :span="6" class="tr">
          <el-button type="primary" @click="loadData">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="mt">
      <el-radio-group v-model="params.status" @change="loadData">
      <el-radio-button label="1">全部运单(300)</el-radio-button>
      <el-radio-button label="2">装货中(120)</el-radio-button>
      <el-radio-button label="3">运输中(70)</el-radio-button>
      <el-radio-button label="4">已完成(100)</el-radio-button>
      <el-radio-button label="5">运单异常(10)</el-radio-button>
    </el-radio-group>
    </el-card>
    <el-card>
      <el-table :data="tableData"
      v-loading="loading">
        <el-table-column type="index" fixed="left" width="50"  label="序号" ></el-table-column>
        <el-table-column prop="no" label="运单号"></el-table-column>
        <el-table-column prop="date" label="下单时间"></el-table-column>
        <el-table-column prop="name" label="客户名称"></el-table-column>
        <el-table-column prop="cargo" label="货物名称"></el-table-column>
        <el-table-column prop="count" label="件数"></el-table-column>
        <el-table-column prop="start" label="起始地"></el-table-column>
        <el-table-column prop="end" label="目的地"></el-table-column>
        <el-table-column prop="price" label="运费"></el-table-column>
        <el-table-column prop="needRecive" label="需要接货"></el-table-column>
        <el-table-column prop="plateNumber" label="车牌号"></el-table-column>
        <el-table-column prop="driver" label="司机"></el-table-column>
        <el-table-column prop="tel" label="司机电话"></el-table-column>
        <el-table-column prop="percent" label="运输进度">
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.percent"></el-progress>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button size="mini" @click="detail(scope.row.no)" >详情</el-button>
            <el-button size="mini" type="danger">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      class="mt mb fr"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixins/breadCrumb.js";
import { post } from "@/utils/http";
import moment from "moment"
export default {
  mixins: [breadCrumb],
  data(){
    return{
      status:1,
      loading:false,
      tableData:[],
      date:[],
      params:{
        waybillNo:"",
        startDate:"",
        status:1
      },
        pageData:{
          page:1,
          pageSize:10
        }
    }
  },
  created(){
    this.loadData()
  },
  beforeRouteLeave(to,from,next){
    if(to.path=="/waybill/list/detail"){
      from.meta.keepAlive=true
    }else{
      from.meta.keepAlive=false
      
    }
    next()
  },
  methods:{
    loadData(){
      this.loading=true
      let startTime=this.date[0]?moment(this.date[0]).format("YYYY-MM-DD"):""
      let endTime=this.date[0]?moment(this.date[1]).format("YYYY-MM-DD"):""
      post("/waybillList",{...this.pageData,...this.params,startTime,endTime}).then(res=>{
        console.log(res);
        this.tableData=res.data.list
        this.loading=false
      })
    },
    detail(no){
      this.$router.push("/waybill/list/detail?no="+no )
    },
    handleSizeChange(pageSize){
      this.params.pageSize=pageSize   
      this.loadData()
    },
    handleCurrentChange(page){
      this.params.page=page
      this.loadData()
    },
  }
};
</script>

<style lang="less" scoped>
</style>