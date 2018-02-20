Vue.component("bulma-message", {
  props: ["header", "body"],
  template: `<article class="message" v-show="!isHidden">
  <div class="message-header">
    <p>{{header}}</p>
    <button @click = "isHidden=true" class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body"><slot>What's up</slot>
  </div>
</article>`,
  data() {
    return { isHidden: false };
  }
});

Vue.component("bulma-modal", {
  props: ["modalActive", "country"],
  template: `<div class="modal" :class="{'is-active': modalActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
  <p class="modal-colour">
    {{country}}
    </p>
  </div>
  <button @click="$emit('close-modal')"class="modal-close is-large" aria-label="close"></button>
</div>`
});

Vue.component("bulma-breadcrumbs", {
  props: ["bulma-breadcrumb-link"],
  template: `<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="#">Ironhack</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Webdev</a></li>
    <li class="is-active"><a href="#" aria-current="page">Full-time</a></li>
  </ul>
</nav>`
});

Vue.component("bulma-breadcrumb-link", {});

const app = new Vue({
  el: "#app",
  data: {
    franceIsActive: false,
    spainIsActive: false,
    usIsActive: false
  }
});
