Vue.component("bulma-message", {
  data() {
    return {
      showMessage: true
    }
  },
  props: ['header', 'body', 'color'],
  template: `
  <article :class="['message', 'is-' + color]">
    <div class="message-header">
      <p> {{ header }} </p>
      <button class="delete" @click="showMessage = !showMessage" aria-label="delete"></button>
    </div>
    <div v-show="showMessage" class="message-body">
      {{ body }}
    </div>
  </article>
  `
})

Vue.component("bulma-modal", {
  props: ['head', 'body', 'show'],
  template: `
  <div class="modal is-active" v-show="show">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title"> Country is: {{ head }}</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        Capital is: {{ body }}
      </section>
    </div>
  </div>
  `
})

const vm = new Vue({
  el: "#app",
  data: {
    showCountry: false,
    capital: "",
    countryName: "",
    capitalArray: [
      {
        capital: 'Paris',
        countryName: 'France',
      },
      {
        capital: 'Madrid',
        countryName: 'Spain'
      },
      {
        capital: 'DC',
        countryName: 'USA'
      }
    ]
  },
  methods: {
    showModal(country, capital) {
      this.showCountry = true;
      this.capital = capital;
      this.countryName = country;
    }
  }
})
