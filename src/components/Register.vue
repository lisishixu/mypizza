<template>
  <div class="register text-center">
    <img src="../assets/logo.png" alt="" width="100">
    <form>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="input1"
          placeholder="请输入你的账号"
          v-model="username"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input2"
          placeholder="请输入你的密码"
          v-model="password"
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="input3"
          placeholder="请保证两次密码一致 "
          v-model="repassword"
        >
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remeber Me</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="onsubmit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Register",
  data() {
    return {
      username:'',
      password:'',
      repassword:''
    };
  },
  methods:{
    onsubmit(){
      if(this.password===''&&tihs.username===''){
        return
      }
      if(this.password===this.repassword){
        var formData={
          username:this.username,
          password:this.password
        }
        // 传输方式，传输到野狗云里面
        axios.post('./user-lsx.json',formData)
        .then(res=>{
          console.log('当前数据抛出成功')
          console.log(res.data)
          //数据抛出成功后实现跳转
          this.$router.replace('/login')
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-control{
    width: 500px;
  }
  .register{
    width: 500px;
    margin:0 auto;
  }
  .btn-block{
    width: 107%; 
  }

</style>
