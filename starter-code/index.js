Vue.component("message-item", {
  props: ["title", "message"],

  template: `
  <article class="message">
  <div class="message-header">
    <p>{{title}}</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    <slot>{{message}}</slot> 
  </div>
</article>
    `,
  data: function() {
    return {
      data: null,
      isActive: false
    };
  }
});

Vue.component("new-modal", {
  props: ["title", "message", "isActive"],
  template: `
  <div class="modal" :class="{ 'is-active': isActive}">
    <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{title}}</p>
                <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <section class="modal-card-body">
            {{message}}
            </section>
        </div>
    </div>
    `,
  methods: {
    closeModal: function() {
      this.$emit("closeclick");
    }
  }
});

Vue.component("bulma-breadcrumbs", {
  template: `
    <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
            <slot>Fallback</slot>
        </ul>
    </nav>
    `
});

Vue.component("bulma-breadcrumb-link", {
  props: ["nul"],
  template: `
      <li :class="{ 'is-active': active}" >
          <a @click="active=true" href="#">Ironhack</a>
      </li>
      `,
  data: function() {
    return {
      active: false,
      links: ["Ironhack", "Courses", "Webdev", "Full-time"]
    };
  }
});

new Vue({
  el: "#app",
  data: function() {
    return {
      data: null,
      france: false,
      spain: false,
      usa: false
    };
  },
  methods: {
    activateModal: function(land) {
      this[land] = !this[land];
    }
  }
});
