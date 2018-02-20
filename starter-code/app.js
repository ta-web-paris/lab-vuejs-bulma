Vue.component('bulma-message', {
    template: `<article class="message">

                    <div class="message-header">
                    <p>{{ header }}</p>
                    <button @click="hide" class="delete" aria-label="delete"></button>
                    </div>

                    <div class="message-body">
                    {{ body }}
                    </div>
                    
                </article>` ,

    props: ["header", "body"],
    methods: {
        hide() {
            this.$emit('hide');
        }
    }
})

const vm = new Vue({
    el: '#app',
    data() {
        return {
            title: "My Bulma-Vue App!",
            messageShowing: true
        }
    },
    methods: {
        hideMessage() {
            this.messageShowing = false;
        }
    }
})
