Vue.component('message', {
	data: function() {
		return { dumped: false }
	},
	props: {
		header: String,
		body: String,
		color: {
			type: String,
			enum: ['dark', 'primary', 'link', 'info', 'success', 'warning', 'danger']
		}
	},
	template: `
  <article :class="'is-'+color" class="message" v-if="!dumped">
  	<div class="message-header">
  		<p>{{header}}</p>
  		<button @click="dumped=true" class="delete" aria-label="delete"></button>
  	</div>
  	<div class="message-body">{{body}}</div>
  	</article>
  `
})

Vue.component('bulmaModal', {
	props: {
		head: String,
		body: String,
		active: {
			type: String,
		}
	},
	methods: {
		closeModal: function() {
			this.$emit('closing')
		},

	},
	template: `
	<div class="modal" :class="active===head?'is-active':''">
 	<div class="modal-background"></div>
  	<div class="modal-card">
  	<header class="modal-card-head">
      <p class="modal-card-title">{{head}}</p>
      <button @click="closeModal" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <p>The capital of is {{body}}.</p>
    </section>
  </div>
	</div>
	`
})

Vue.component('bulmaBreadcrumbs', {
	template: `
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
			<bulmaBreadcrumbsLink>
			<template slot-scope="props">
				{{props.li}}
			</template>
			</bulmaBreadcrumbsLink>
			</ul>
		</nav>
	`
})


Vue.component('bulmaBreadcrumbsLink', {
	props: {
		active: Boolean,
		href: String,
	},
	template: `
		<div class="element">
		<slot><li  lass="'active'"><a href="#" :aria-current="active?'page':''"></a></li></slot
		</div>
		`
})


const vw = new Vue({
	el: '#app',
	data: {
		countries: [{
				name: 'France',
				capital: 'Paris'
			},
			{
				name: 'Spain',
				capital: 'Madrid'
			},
			{
				name: 'United-States',
				capital: 'Washington'
			}
		],
		hrefs: ['Ironhack', 'Courses', 'Webdev', 'Full-time'],
		active: '',
	},
	methods: {
		close: function() {
			return this.active = ''
		}
	}
})

// <article class="message">
// 			<div class="message-header">
// 				<p>Hello Ironhacker</p>
// 				<button class="delete" aria-label="delete"></button>
// 			</div>
// 			<div class="message-body">
// 				I created this awesome website during my Ironhack bootcamp.
// 			</div>
// 		</article>
//

// <nav class="breadcrumb" aria-label="breadcrumbs">
// 	<ul>
// 		<li><a href="#">Ironhack</a></li>
// 		<li><a href="#">Courses</a></li>
// 		<li><a href="#">Webdev</a></li>
// 		<li class="is-active"><a href="#" aria-current="page">Full-time</a></li>
// 	</ul>
// </nav>