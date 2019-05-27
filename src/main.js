import Vue from 'vue'
import App from './App.vue'
import Example from './Example.vue'


Vue.component('app-example', Example);


Vue.filter('capitalize', function (value) {
	if (!value) return ''
	value = value.toString()
	return value.replace(/\b\w/g, function (l) { return l.toUpperCase() })
});



new Vue({
	render: h => h(App),
}).$mount('#app')




