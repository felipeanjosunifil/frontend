import { createWebHistory, createRouter } from "vue-router";

import TelaInicial from "@/views/TelaInicial.vue";
import AboutView from "@/views/AboutView.vue";


const routes = [
    { path: '/', component: TelaInicial },
    { path: '/about', component: AboutView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;