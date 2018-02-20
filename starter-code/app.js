


const vm = new Vue({
    el: '#app',
    data() {
        return {
            title: "My Bulma-Vue App!",
            messageShowing: true,
            countries: [
                { name: "France", capital: "Paris", active: false },
                { name: "Spain", capital: "Madrid", active: false },
                { name: "United States", capital: "Washington D.C.", active: false }
            ]
        }
    },
    methods: {
        hideMessage() {
            this.messageShowing = false;
        },
        showModal(countryIndex) {
            this.countries[countryIndex].active = true;
        },
        closeModal(countryIndex) {
            this.countries[countryIndex].active = false;
        }
    }
})
