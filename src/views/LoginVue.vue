<template>
  <div>
    <el-row type="flex" justify="center">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>邦达国际物流平台</h2>
        </div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model.trim="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model.trim="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn01" :loading="loading" @click="login" >登录</el-button>
            </el-form-item>
            
          </el-form>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { post } from '@/utils/http';
import { setToken } from '@/utils/auth';
/* import axios from 'axios'; */
export default {
  data(){
    return{
      loading:false,
      ruleForm:{
        username:"",
        password:""
      },
      rules:{
        username: [
            { required: true, message: '请输入用户名:', trigger: 'blur' },
            { pattern:/^\w{4,8}$/,message:'用户名要求4-8位数字字母组合',trigger:'blur'}
          ],
        password:[
            { required: true, message:"请输入密码:", trigger:'blur'},
            { pattern:/^\d{6}$/,message:"密码要求必须为6位数字",trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
     
     this.$refs.ruleForm.validate((valid)=>{
      if(valid){
         this.loading=true
        /* axios({
          url:"http://localhost:8080/login",
          method:"post",
          data:this.ruleForm
        }) */
        post("/login",this.ruleForm).then(res=>{
          this.loading=false
          setToken(res.token)
          sessionStorage.setItem("nickname",res.nickname)
          this.$router.push('/')
          console.log(res);
        }).catch((error)=>{
          this.loading=false
          console.log(error);
        })
      }
     })
    } 
  }
};
</script>

<style lang="less" scoped>
.box-card {
  width: 500px;
  background-color: #fcfcfd;
  margin-top: 200px;
  h2 {
    text-align: center;
  }
 
  .btn01{
    width: 100%;
    &:hover{
      background-color: #b0ccf0;
    }
  }
}
</style>