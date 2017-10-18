Vue.component("message", {
  data() {
    return {
      hideBox: false
    };
  },
  template: `<article :class="['message', 'is-' + color]">
  <div class="message-header">
    <p>{{header}}</p>
    <button class="delete" aria-label="delete" @click="hideBox = !hideBox"></button>
  </div>
  <div v-show="!hideBox" class="message-body">
  {{body}}
  </div>
</article>`,
  props: ["header", "body", "color"]
});

const vm = new Vue({
  el: "#app"
});
