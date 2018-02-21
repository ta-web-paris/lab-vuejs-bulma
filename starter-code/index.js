Vue.component("bulma-message", {
  data() {
    return {
      isShowing: true
    };
  },

  template: `<article class='message' v-if="isShowing" >
  <div class="message-header" >
    <p>Hello Ironhacker</p>
    <button class="delete" aria-label="delete" @click="deleteMessage">Delete</button>
  </div>
  <div class="message-body">
   <slot></slot>
  </div>
</article>`,
  methods: {
    deleteMessage: function() {
      this.isShowing = false;
    }
  }
});

Vue.component("bulma-modal", {
  props: ["country", "capital", "active"],
  template: `<div class="modal" :class="{ 'is-active':active}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{country}}</p>
      <button class="delete" aria-label="close" @click="cancel" ></button>
    </header>
    <section class="modal-card-body">
     The capital is {{capital}}
    </section>
  </div>
</div>
`,
  methods: {
    cancel: function() {
      this.$emit("hide-me");
    }
  }
});
Vue.component("bulma-breadcrumbs", {
  template: `<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <slot></slot>
  </ul>
</nav>`
});
Vue.component("bulma-breadcrumb-link", {
  data() {
    return {
      active: false
    };
  },

  template: `<li :class="{ 'is-active':active}" <a @click="active=true" href="#"><slot></slot></a></li>`
});
const vm = new Vue({
  el: "#app",
  data: {
    countries: [
      {
        country: "France",
        capital: "Paris",
        active: false
      },

      {
        country: "Spain",
        capital: "Madrid",
        active: false
      },
      {
        country: "United-States",
        capital: "Washington",
        active: false
      }
    ]
  },

  methods: {
    activate: function(index) {
      this.countries[index].active = true;
    },
    hideModal(index) {
      this.countries[index].active = false;
    }
  }
});
