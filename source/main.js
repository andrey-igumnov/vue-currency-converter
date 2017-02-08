var Vue = require('vue')
var converter = require('./components/converter.vue')
var exchanger = require('./components/exchanger.vue')
var ionicons = require('ionicons/dist/css/ionicons.min.css')

new Vue({
    el: '#app',
    data: {
        msg: ""
    },
    methods: {
        handleDataChange: function(converterData) {
            this.msg = converterData;
        }
    },
    components: {
        converter: converter,
        exchanger: exchanger
    }
})
