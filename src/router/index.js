import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import DocView from "../views/DocView.vue"
/* ------------------------------------------------- */
import ProjectsView from "../views/ProjectsView.vue"
import CarView from "../views/CarView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/documentation",
            name: "documentation",
            component: DocView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView
        },
        {
            path: "/car/:id",
            name: "car",
            component: CarView
        }
    ]
})

export default router