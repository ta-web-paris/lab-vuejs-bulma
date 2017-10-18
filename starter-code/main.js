const Message = {
  data: function () {
    return {
      isShowing: true
    }
  },
  props: ['header', 'body'],
  template: `
  <div v-if="this.isShowing" class="message">
    <div class="message-header">
      <h3>{{header}}</h3>
      <button v-on:click="isShowing = false" class="delete">X</button>
    </div>
    <p class="message-body">{{body}}</p>
  </div>
  `
}

const Modal = {
  props: ['head', 'body', 'show'],
  template: `
    <div class="modal" :class="show ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h1 class='title'>{{head}}</h1>
        <p class='subtitle'>The capital is {{body}}</p>
      </div>
      <button class="modal-close is-large" aria-label="close" v-on:click="$emit('close')">X</button>
    </div>
  `
}

const Country = {
  data: function () {
    return {
      isShowingModal: false
    }
  },
  methods: {
    closeModal: function () {
      this.isShowingModal = false
    }
  },
  props: ['country', 'capital'],
  components: {Modal},
  template: `
  <div>
    <div class="button is-info" v-on:click="isShowingModal=true">
        {{country}}
    </div>
    <Modal :head="country" :body="capital" :show="isShowingModal" @close="closeModal"></Modal>
  </div>
  `
}

new Vue({
  el: '#app',
  data: {
    countries: [{
      name: 'France',
      capital: 'Paris'
    }, {
      name: 'Spain',
      capital: 'Madrid'
    }, {
      name: 'United-States',
      capital: 'Washington'
    }]
  },
  components: {
    Message,
    Country, 
    Modal
  }
})