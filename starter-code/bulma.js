Vue.component('message',{
  props: {
    header: String,
    body: String,
    color: String,
  },
  // ['header', 'body', 'color'],
  data (){
    return {
      show: true,
    }
  },
  template: `
  <article :class="['message', 'is-'+color]" v-if="show">
  <div class="message-header">
    <p>{{header}}</p>
    <button class="delete" aria-label="delete" @click="show=!show"></button>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>
  `,

});

Vue.component('modals',{
  props: ['head', 'body', 'show'],
  // data(){
  //   return {
  //     show: false,
  //   }
  // },
  template: `
  <div class="modal" :class="show ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-content"><h2 style="color:white">{{head}}</h2><p style="color:white">{{body}}</p></div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
  `,
});

const vm = new Vue({
    el: '#app',
});

const vm2 = new Vue({
  el: "#bulmaModal",
  data: {
    showFrance: false,
    showSpain: false,
    showUK: false,
  }
});
