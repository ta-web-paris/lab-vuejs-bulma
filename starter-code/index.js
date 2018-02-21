Vue.component("bulma-message", {
  props: ["header", "body"],
  template: `
  <article class="message"  v-show="isVisible">
  <div class="message-header">
    <p>{{header}}</p>
    <button @click="isVisible=false" class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    {{body}}
  </div>
</article>
`,
  data: function() {
    return { isVisible: true };
  }
});

Vue.component("bulma-modal", {
  props: ["title", "body", "isActive"],
  template: `
  <div class="modal" :class="{'is-active' : isActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{title}}</p>
      <button @click="$emit('close')" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      {{body}}
    </section>
  </div>
</div>
  `
});

vm = new Vue({
  el: "#app",
  data() {
    return {
      franceActive: false,
      spainActive: false,
      usaActive: false
    };
  }
});
