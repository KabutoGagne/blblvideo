import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../views/user.vue'
import register from '../views/register.vue'
import login from '../views/login.vue'
import editProfile from '../views/editProfile.vue'
import Home from '../views/Home.vue'
import article from '../views/article.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',redirect:'/home'
  },
	{
		path:'/register',
		component: register
	},
	{
		path:'/user',component: user
	},
	{
		path:'/login',component:login
	},
	{path:'/edit',component: editProfile},
	{path:'/home',component: Home},
	{path:'/article/:id',component: article}
]

const router = new VueRouter({
  routes
})

export default router
