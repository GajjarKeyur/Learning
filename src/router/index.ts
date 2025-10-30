import { createRouter, createWebHistory } from 'vue-router'

const ProjectList = () => import('../components/ProjectList.vue')
const TodoListPage = () => import('../projects/TodoList/index.vue')
const RandomQuoteGeneratorPage = () => import('../projects/RandomQuoteGenerator/index.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: ProjectList },
    { path: '/projects/1', name: 'todo-list', component: TodoListPage },
    { path: '/projects/2', name: 'random-quote-generator', component: RandomQuoteGeneratorPage },
  ],
})

export default router
