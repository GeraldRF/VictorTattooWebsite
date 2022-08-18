import { createRouter, createWebHistory } from 'vue-router'

//import all component used in routes
import Home from '@/views/Home.vue'
import Catalogue from '@/views/Catalogue.vue'
import Promotions from '@/views/Promotions.vue'
import Works from '@/views/Works.vue'
import Contact from '@/views/Contact.vue'
import About from '@/views/About.vue'

//init routes
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: Catalogue,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promotions,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
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
];

//create routes
const router = createRouter({
  history: createWebHistory(),//process.env.BASE_URL
  routes,
});

export default router;