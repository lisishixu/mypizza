import Vue from "vue";
import Router from "vue-router";

// 一级路由
import Home from "@/components/Home";
import About from "@/components/About";
import Admin from "@/components/Admin";
import Login from "@/components/Login";
import Menu from "@/components/Menu";
import Register from "@/components/Register";

//二级路由
import Acitiviry from "@/components/about/Acitiviry";
import Contact from "@/components/about/Contact";
import History from "@/components/about/History";
import Delivery from "@/components/about/Delivery";

//三级路由
import Address from "@/components/about/contact/Address";
import Person from "@/components/about/contact/Person";
import Telphone from "@/components/about/contact/Telphone";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component:Home
    },
    {
      path: "/about",
      name: "About",
      component: About,
      redirect: "/contact",
      children: [
        //二级路由
        {
          path: "/contact",
          name: "Contact",
          component: Contact,
          redirect: "/address",
          children: [
            //三级路由
            {
              path: "/address",
              name: "Address",
              component: Address
            },
            {
              path: "/person",
              name: "Person",
              component: Person
            },
            {
              path: "/telphone",
              name: "Telphone",
              component: Telphone
            }
          ]
        },
        {
          path: "/acitiviry",
          name: "Acitiviry",
          component: Acitiviry
        },
        {
          path: "/delivery",
          name: "Delivery",
          component: Delivery
        },
        {
          path: "/history",
          name: "History",
          component: History
        }
      ]
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/menu",
      name: "Menu",
      component: Menu
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ],
  //取消#的锚点连接
  mode: "history"
});
