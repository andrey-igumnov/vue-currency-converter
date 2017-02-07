var Vue = require('vue')
var converter = require('./components/converter.vue')
var ionicons = require('ionicons/dist/css/ionicons.min.css')

new Vue({
    el: '#app',
    components: {
        converter: converter
    }
})
