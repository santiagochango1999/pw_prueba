import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/estudiante',
        component: ()=>import( '../Page/PaginaEstudiante')
    }, {
        path: '/token',
        component: ()=>import('../Page/PaginaToke')
    }

]

const router = createRouter({history: createWebHashHistory(),routes})

export default router