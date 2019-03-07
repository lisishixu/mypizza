<template>
  <div class="newmenu">
    <h3 class="text-center text-warning">菜单管理</h3>
    <table class="table text-center">
      <thead>
        <tr>
          <th scope="col">序号</th>
          <th scope="col">品种</th>
          <th scope="col">删除</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) in items" :key="index">
        <tr>
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>
            <button class="btn btn-danger" @click="delitem(item)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewMenu",
  data() {
    return {
      items: []
    };
  },
  mounted() {
    var that = this;
    axios.get("./menu-lsx.json").then(res => {
      for (var key in res.data) {
        var item = res.data[key];
        item.id = key;
        that.items.push(item);
      }
    });
  },
  methods:{
      delitem(item){
          axios.delete('./menu-lsx/'+item.id+'.json')
          .then(res=>{
              alert('删除成功')
          })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
