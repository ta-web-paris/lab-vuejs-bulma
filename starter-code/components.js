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

Vue.component('bulma-modal', {
    template: `
                <div :class="['modal', {'is-active':active}]">
                    <div class="modal-background"></div>
                    <div class="modal-content">
                        <div class="notification">
                            <h2 class="title"> {{ header }} </h2>
                            <div class="container">
                            The capital is {{ body }}
                            </div>
                        </div>
                    </div>
                    <button @click="tellParentToCloseMe" class="modal-close is-large" aria-label="close"></button>
                </div>
             `,

    props: ["header", "body", "active"],
    methods: {
        tellParentToCloseMe() {
            this.$emit("close-modal")
        }

    }
})

Vue.component('bulma-breadcrumbs', {
    template: `
                <div>
                    <nav class="breadcrumb" aria-label="breadcrumbs">
                        <ul>
                            <slot>
                                Default Content Here!
                            </slot>
                        </ul>
                    </nav>
                    
                </div>
             `,

    props: []
})

Vue.component('bulma-breadcrumb-link', {
    template: `
                <li :class="{'is-active':active}">
                    <a href="#"> 
                        <slot> Default Content Here! </slot>
                    </a>
                </li>`,
    props: { active: Boolean }
})

