import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CursoGratuito from '../views/CursoGratuitosView.vue'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView,
      meta: { title: 'ITEC ' },
    },
    {
      path: '/cursos-gratuitos',
      name: 'cursosGratuito',
      component: CursoGratuito,
      meta: { title: 'ITEC | Cursos gratuitos ' },
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to,from, next)=>{
  document.title= `${to.meta.title}`;
  next();
})

export default router
