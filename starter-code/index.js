Vue.component("bulma-message", {
  props: [`header`, `body`],
  template: `<article class="message" v-show="isVisible">
      <div class="message-header">
      <p>{{header}}</p>
        <button @click="isVisible=false" class="delete" aria-label="delete" />
      </div>
      <div class="message-body">
      {{body}}
      </div>
    </article>`,
  data: function() {
    return { isVisible: true };
  }
});

Vue.component("bulma-modal", {
  props: [`head`, `body`],
  template: `
  <div>
  
  <button @click="isActive = true" class="button is-primary">{{head}}</button>

  <div class="modal" :class="{'is-active': isActive}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{head}}</p>
      <button @click="isActive=false" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
     {{body}}
    </section>
  </div>
</div>
</div>`,

  data: function() {
    return { isActive: false };
  }
});

Vue.component("bulmaBreadcrumbLink", {
  props: [`href`, "body"],
  template: `<div>
  <li><a :href="href">{{body}}</a></li>
  </div>`
});

Vue.component("bulmaBreadcrumbs", {
  props: [`href`],
  template: `<div>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <bulma-breadcrumb-link :href="href"></bulma-breadcrumb-link>
    </ul>
  </nav>
  </div>`
});

const vm = new Vue({
  el: "#app",
  data: {
    tittle: "Welcome to my Bulma website",
    subTittle: "Bulma modal",
    isVisible: "",
    href: ""
  }
});
