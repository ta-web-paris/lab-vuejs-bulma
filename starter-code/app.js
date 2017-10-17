Vue.component('bulma-message', {
	props: ['header', 'body', 'color'],
	data: function(){
		return { isClosed: false }
	},
	template: `<article v-show="!isClosed" class="message" :class="'is-'+color">
			<div class="message-header">
				<p>{{ header }}</p>
				<button class="delete" aria-label="delete" @click="isClosed=!isClosed"></button>
			</div>
			<div class="message-body">
			{{ body }}
			</div>
		</article>`,
	
		
});


const app = new Vue({
	el: "#app",
	data: {
		message: 'Welcome to my Bulma website!',
	},
});