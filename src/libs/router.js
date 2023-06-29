import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import BeersList from '../pages/Beers_list.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ContactPage from '../pages/ContactPage.vue'
const routes = [
    {path: '/', component: Home, name:'Home'},
    {path: '/beers', component: BeersList, name:'Beers List'},
    {path: '/contact', component: ContactPage, name:'Contact'},
    {path: '/:catchAll(.*)', component: NotFoundPage }
    
]
const router = createRouter({
    routes: routes,
    history: createWebHistory(),

})

export default router