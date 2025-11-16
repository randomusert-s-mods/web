import { createRouter, createWebHistory } from 'vue-router'
import ModListComponent from '@/components/ModListComponent.vue'

const routes = [
    {path: '/web/', component: ModListComponent }
]

const router = createRouter({
    history: createWebHistory("/web/"),
    routes
})

export default router