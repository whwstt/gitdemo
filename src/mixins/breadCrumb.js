export default{
  data(){
    return{
      BreadList:[]
    }
  },
  created(){
    this.createBread()
  },
  methods:{
    createBread(){
      this.BreadList=this.$route.meta.bread?this.$route.meta.bread:[]
    }
  }
}