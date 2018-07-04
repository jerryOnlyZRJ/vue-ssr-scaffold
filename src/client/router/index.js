import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld/HelloWorld'

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: 'history',
		routes: [{
			path: '/helloworld',
			name: 'HelloWorld',
			component: HelloWorld
		}]
	})
}