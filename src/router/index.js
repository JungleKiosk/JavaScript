import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/DocView.vue"
/* ------------------------------------------------- */
import ProjectsView from "../views/ProjectsView.vue"


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
            component: AboutView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView
        }
    ]
})

export default router