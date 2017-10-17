Vue.component('message', {
  props: ['header', 'body'],
  data(){
    return {
      showMessage: true
    }
  },
  template: `
  <article class='message' v-show='showMessage'>
  <div class='message-header'>
  <p> {{header}}</p>
  <button class="delete" aria-label="delete" @click="showMessage =!showMessage"></button>
  </div>
  <div class='message-body'>
  {{body}}
  </div>
  </article>
  `

})

var app = new Vue({
  el: '#app'
})
