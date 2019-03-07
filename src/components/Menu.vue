<template>
  <div class="menu container row">
    <div class="col-7">
      <table class="table text-center text-primary">
        <thead>
          <tr>
            <th scope="col">尺寸</th>
            <th scope="col">价格</th>
            <th scope="col">加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
          <tr>
            <td colspan="3">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="3">{{item.description}}</td>
          </tr>
          <tr v-for="(item1,index1) in item.options" :key="index1">
            <td>{{item1.size}}</td>
            <td>{{item1.price}}</td>
            <td>
              <button class="btn btn-success" @click="addToBasket(item,item1)">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 右边的购物车 -->
    <div class="col-5 text-center">
      <h3>购物车</h3>
      <table class="table text-center">
        <thead class="bg-primary text-white">
          <tr>
            <th scope="col">数量</th>
            <th scope="col">种类</th>
            <th scope="col">价格</th>
          </tr>
        </thead>
        <tbody v-for="(item,index) in Newitem" :key="index">
          <tr>
            <td>
              <button>-</button>
              <input type="number" v-model="item.quantity">
              <button>+</button>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Menu",
  data() {
    return {
      items: {},
      Newitems: []
    };
  },
  mounted() {
    axios.get("/menu-lsx.json").then(res => {
      this.items = res.data;
    });
  },
  methods: {
    addToBasket(item, options) {
      var result = this.Newitems.filter(item1 => {
        return item.name == item1.name && options.size == item1.size;
      });
    }
  }
};
</script>
<style scoped>
</style>


