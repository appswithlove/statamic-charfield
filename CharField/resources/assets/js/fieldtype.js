/** global: Vue */

Vue.component('char_field-fieldtype', {

    template: '<input v-if="isInput" type="text" :class="classes" :maxlength="config.hard_limit" v-model="data"/>\n' +
    '<textarea v-if="isTextarea" :class="classes" :maxlength="config.hard_limit" v-model="data"></textarea>\n\n' +
    '<div class="help-block" v-if="optimalMin || optimalMax || high">\n    ' +
    '<p>\n        ' +
    '<small v-if="optimalMin && optimalMax">{{ translate("addons.CharField::fieldtypes.ideal_x", {min: optimalMin, max: optimalMax}) }}</small>\n        ' +
    '<small v-if="optimalMin && !optimalMax">{{ translate("addons.CharField::fieldtypes.min_x", {min: optimalMin}) }}</small>\n        ' +
    '<small v-if="!optimalMin && (optimalMax || high)">{{ translate("addons.CharField::fieldtypes.max_x", {max: optimalMax || high}) }}</small>\n        ' +
    '<small>&gt; {{ translate("addons.CharField::fieldtypes.current") }} <strong>{{ dataLength }}</strong></small>\n    ' +
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
            optimalMax: this.config.optimal_max || this.config.high
        };
    },

    computed: {
        classes: function () {
            return 'form-control type-' + this.config.type + ' status-' + this.status;
        },

        dataLength: function () {
            return this.data ? this.data.length : 0;
        },

        status: function () {
            var length = this.dataLength;

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
