Vue.component('message', {
  props: ['header', 'body'],
  data() {
    return {
      showMessage: true
    };
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

});
Vue.component('modal', {
  props: ['head', 'body', 'isActive'],
  template: `
      <div :class="['modal', {'is-active': isActive}]" >
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title"><slot name="head"></slot></p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body"><slot name="body"></slot>
          </section>
        </div>
      </div>
      `,
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }

});

Vue.component('bulma-breadcrumbs', {
  template: `
  <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul><slot></slot></ul>
</nav>
      `,
  methods: {}
});

Vue.component('bulma-breadcrumb-link', {
  props: ['active'],
  template: `
        <li :class="{'is-active':active === ''}"><a href="#" :aria-current="active === '' ? 'page' : null"><slot></slot></a></li>
      `,


});

var app = new Vue({
  el: '#app',
  data: {
    showModal: false,
    country: '',
    capital: ''
  },
  methods: {
    showCountry(country, capital) {
      this.showModal = true;
      this.country = country;
      this.capital = capital;
    },
    closeModal() {
      this.showModal = false;
    }
  }
});