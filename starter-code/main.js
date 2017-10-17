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

Vue.component("message-country", {
  props: ["country", "capital", "color"],
  data() {
    return { show: true };
  },
  template: `
  <article v-show="selected===country" :class='["message", "is-"+color]'>
    <div class="message-header">
      <p>{{country}}</p>
      <button @click="show =!show" class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
    {{capital}}
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
    ],
    capitales: [
      {
        country: "France",
        text: "The capital is Paris",
        color: "info"
      },
      {
        country: "Spain",
        text: "The capital is Madrid",
        color: "info"
      },
      {
        country: "US",
        text: "The capital is Washington",
        color: "info"
      }
    ],
    active: false,
    selected: ""
  }
});
