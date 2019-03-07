<template>
  <div id="app" class="container">
    <!-- 展示导航栏 -->
    <Header></Header>

    <!-- 用来展示路由页面 -->
    <router-view/>
    <!-- 在home页展示历史订单 -->
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: "App",
  data(){
    return{
    img:'../static/logo.png'
    }
  },
  components:{
    'Header':Header
  }
};
</script>

<style>
</style>
