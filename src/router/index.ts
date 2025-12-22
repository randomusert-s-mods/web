import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import ModListComponent from '@/components/ModListComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'

import ModPackListComponent from '@/components/ModPackListComponent.vue'

const routes = [
    {path: '/', component: HomeComponent },
    {path: '/mods', component: ModListComponent },
    {path: '/modpacks', component: ModPackListComponent  }
]

const router = createRouter({
    history: createWebHashHistory("/"),
    routes
})

export default router