import { createRouter, createWebHistory } from 'vue-router'

import WebsiteLayout from '@/views/WebsiteLayout.vue'
import AdminLayout from '@/views/AdminLayout.vue'

import Home from '@/views/website/Home.vue'
import DisplayCategory from '@/views/website/DisplayCategory.vue'
import Contact from '@/views/website/Contact.vue'
import About from '@/views/website/About.vue'

import Login from '@/views/admin/Login.vue'
import Dashboard from '@/views/admin/Dashboard.vue';

//init routes
const routes = [
  {
    path: '',
    name: 'website',
    component: WebsiteLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "/category/:category/:subcategory?",
        name: "display-category",
        component: DisplayCategory,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
    ]
  },
  {
    path: '',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: "/dashboard",
        name: "admin-dashboard",
        component: Dashboard,
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

//create routes
const router = createRouter({
  history: createWebHistory(),//process.env.BASE_URL
  routes,
});

export default router;