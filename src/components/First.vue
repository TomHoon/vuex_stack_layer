<template>
	<div class="content">
		<div><h2>first</h2></div>
		<button @click="showLayer('')">Back</button>
	</div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
	methods:{
		...mapActions(['setPageName']),
		showLayer(param) {
			this.setPageName(param);
		}
	}

}
</script>
<style>
.content {
	position: fixed;
	width:300px;
	height:100%;
	left:0;
	background: #442222;
}
</style>