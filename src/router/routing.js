import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import Calculator from '../views/Calculator.vue'; 
import Week from '../views/Week.vue'; 
import Mounth from '../views/Mounth.vue'; 
import Year from '../views/Year.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }, 
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
  }, 
  {
    path: '/week',
    name: 'Week',
    component: Week,
  }, 
  {
    path: '/mounth',
    name: 'Mounth',
    component: Mounth,
  }, 
  {
    path: '/year',
    name: 'Year',
    component: Year,
  }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
