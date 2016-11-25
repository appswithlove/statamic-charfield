Vue.component('char_field-fieldtype', {

    template: '<input v-if="isInput" type="text" :class="classes" :maxlength="maxlength" v-model="data"/>\n' +
    '<textarea v-if="isTextarea" :class="classes" :maxlength="maxlength" v-model="data"></textarea>\n\n' +
    '<div class="help-block" v-if="optimalMin || optimalMax || high">\n    ' +
    '<p>\n        ' +
    '<small v-if="optimalMin && optimalMax">Ideal {{ optimalMin }} bis {{ optimalMax }} Zeichen</small>\n        ' +
    '<small v-if="optimalMin && !optimalMax">min. {{ optimalMin }} Zeichen</small>\n        ' +
    '<small v-if="!optimalMin && (optimalMax || high)">max. {{ optimalMax || high }} Zeichen</small>\n        ' +
    '<small>&gt; Aktuell <strong>{{ dataLength || 0 }}</strong></small>\n    ' +
    '</p>\n</div>',

    props: ['name', 'data', 'config'],

    data: function () {
        return {
            status: 'loading',
            isTextarea: this.config.input_type == 'textarea',
            isInput: this.config.input_type != 'textarea',
            low: this.config.low,
            high: this.config.high || this.config.hard_limit,
            optimalMin: this.config.optimal_min || this.config.low,
            optimalMax: this.config.optimal_max || this.config.high,
            hardLimit: this.config.hard_limit
        };
    },

    computed: {
        classes: function () {
            return 'form-control type-' + this.config.type + ' status-' + this.status;
        },

        maxlength: function () {
            return this.config.hard_limit;
        },

        dataLength: function () {
            return this.data.length || 0;
        },

        status: function () {
            var length = this.data.length;

            if (this.low !== false && length < this.low) {
                return 'low'
            } else if (this.high !== false && length > this.high) {
                return 'high';
            }

            if (this.optimalMin && this.optimalMax) {
                if (length >= this.optimalMin && length <= this.optimalMax) {
                    return 'good';
                }

                return 'ok';
            }

            return 'good';
        }
    }
});
