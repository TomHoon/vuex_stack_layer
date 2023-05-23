import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import First from '@/components/First.vue'
import Second from '@/components/Second.vue'

const store = createStore({
	state(){
		return{
			pageName: ''
		}
	},
	getters: {
		getPageName(state){
			return state.pageName;
		}
	},
	mutations: {
		setPageName(state, payload) {
			state.pageName = payload;
		}
	},
	actions: {
		setPageName(context, payload) {
			context.commit('setPageName', payload);
		}
	}
})

const app = createApp(App);

app.component('First', First);
app.component('Second', Second);

app.use(store);
app.mount("#app")