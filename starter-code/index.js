Vue.component("bulma-message", {
  template: ` 
    <article v-if="isVisible===true" >
    <div class="message-header">
      <p>{{header}}</p>
      <button  @click="isVisible=false" class="delete"   aria-label="delete" ></button>
    </div>
    <slot>
    </slot>
  </article>`,
  props: {
    header: String,
    body: String,
    color: String
  },
  data() {
    return { isVisible: true };
  }
});

Vue.component("bulma-modal", {
  template: `
<div class="modal is-active"  v-if="isVisible" >
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{country}}</p>
    </header>
    <section class="modal-card-body">
      The capital of {{country }} is {{capital}}
    </section>
    <button class="button" @click="deleteModal">Cancel</button>
  </footer>
  </div>
</div>
`,
  props: {
    capital: String,
    country: String,
    isVisible: Boolean
  },

  methods: {
    deleteModal() {
      this.isVisible = false;
      this.$emit("delete");
    }
  }
});

Vue.component("bulma-breadcrumbs", {
  template: `
    <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
     <slot></slot>
    </ul>
  </nav>
  `
});

Vue.component("bulma-breadcrumb-link", {
  template: `
    <li class="is-active" v-if="isActive"><a href="#">{{text}}</a></li>
    <li  v-else><a href="#">{{text}}</a></li>
    `,
  props: {
    text: String,
    isActive: Boolean
  }
});

const vm = new Vue({
  el: "#bulma",
  data: {
    message: {
      header: "Hello Ironhacker",
      body: "I created this awesome website during my Ironhack bootcamp.",
      color: "message is-link"
    },
    countries: [
      {
        id: 0,
        text: "France",
        textCapital: "Paris",
        modalIsVisible: false
      },
      {
        id: 1,
        text: "Spain",
        textCapital: "Madrid",
        modalIsVisible: false
      },
      {
        id: 2,
        text: "United-States",
        textCapital: "Washington",
        modalIsVisible: false
      }
    ],
    navElements: [
      {
        id: 0,
        text: "Ironhack",
        active: false
      },
      {
        id: 1,
        text: "Courses",
        active: false
      },
      {
        id: 2,
        text: "Webdev",
        active: false
      },
      {
        id: 3,
        text: "Full-time",
        active: true
      }
    ]
  },
  methods: {
    hideModal(index) {
      this.countries[index].modalIsVisible = false;
    }
  }
});
