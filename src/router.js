import { createRouter, createWebHistory } from 'vue-router';

import AboutMe from './pages/content/AboutMe.vue';
import HomePage from './pages/content/HomePage.vue';
import LearningCss from './pages/content/LearningCss.vue';
import LearningDataStructure from './pages/content/LearningDataStructure.vue';
import LearningVue from './pages/content/LearningVue';
import NotFound from './pages/NotFound.vue';

// configure router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/css', component: LearningCss },
    { path: '/vue', component: LearningVue },
    { path: '/algorithms', component: LearningDataStructure },
    { path: '/home', component: HomePage },
    { path: '/about', component: AboutMe },
    { path: '/:notFound(.*)', component: NotFound }, // (.*) will redirect for /anything
  ]
}); 

export default router;