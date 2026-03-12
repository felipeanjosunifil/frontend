import { createRouter, createWebHistory } from "vue-router";

import AboutView from "@/views/AboutView.vue";
import PaginaInicialView from "@/views/PaginaInicialView.vue";

const routes = [
    {path:'/', component:  PaginaInicialView},
    {path:'/about', component: AboutView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;