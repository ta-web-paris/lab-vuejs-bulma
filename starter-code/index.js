Vue.component("bulma-message", {
  template: `<article class="message" v-if="isSeen">
        <div class="message-header">
            <p>{{header}}</p>
            <button class="delete" @click="isSeen = !isSeen"></button>
        </div>
        <div class="message-body">
            {{body}}
        </div>
  </article>`,
  props: ["header", "body"],
  data() {
    return { isSeen: true };
  }
});

Vue.component("bulma-modal", {
  template: `
  <div>
  <button class=" button is-medium is-primary" @click="isActive = true"> {{head}}</button>
  <div class="modal" :class="{ 'is-active' : isActive}">
  <div class="modal-background"></div>
  <div class="modal-content">
  <header class="modal-card-head">
      <p class="modal-card-title">{{head}}</p>
      <button class="delete" aria-label="close" @click="isActive = false"></button>
    </header>
    <section class="modal-card-body">
        {{body}}      
    </section>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
</div>`,
  props: ["head", "body"],
  data() {
    return { isActive: false };
  }
});

Vue.component("bulma-bread-crumbs", {
  template: `

 <ul>
 <slot>
  Fallback
  </slot>
 </ul>
  
    `
});

Vue.component("bulma-bread-crumb-link", {
  template: `
  <li>
    <a href="#" :class="{ 'is-active' : isActive}" @click="isActive = !isActive">{{content}}</a>
  </li>
    `,
  props: ["content"],

  data() {
    return { isActive: false };
  }
});

// créer une instance racine
new Vue({
  el: "#example"
});

new Vue({
  el: "#picorino"
});

new Vue({
  el: ".breadcrumb",
  data: {
    titles: ["Ironhack", "Course", "Dev", "Full-time"]
  }
});
