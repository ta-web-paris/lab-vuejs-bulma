Vue.component("message-diplay", {
  props: ["header", "body", "color"],
  data() {
    return { show: true };
  },
  template: `
  <article v-show="show" :class='["message", "is-"+color]'>
    <div class="message-header">
      <p>{{header}}</p>
      <button @click="show =!show" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
    {{body}}
    </div>
  </article>
  `
});

new Vue({
  el: "#app",
  data: {
    messages: [
      {
        header: "Hello Ironhacker",
        body: "I created this awesome website during my Ironhack bootcamp.",
        color: "info"
      },
      {
        header: "Close",
        body: "You can close me by clicking on the cross the top right",
        color: "warning"
      }
    ]
  }
});
