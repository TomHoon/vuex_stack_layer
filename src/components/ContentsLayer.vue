<template>
	<div class="contents">
		<button @click="showLayer('First')">First</button>
		<button @click="showLayer('Second')">Second</button>
		<component :is="getPageName">
		</component>
	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
//test
export default {
	computed: {
		...mapGetters(['getPageName'])
	},
	methods: {
		...mapActions(['setPageName']),
		showLayer(param) {
			this.setPageName(param);
		}
	}
}
</script>
<style>
.contents{
	display:flex;
}
</style>