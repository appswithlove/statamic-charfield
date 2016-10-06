Vue.component('char_field-fieldtype', {

  template: '<small class="help-block" v-if="optimalMin || optimalMax">\n  ' +
  '<p>\n    ' +
  '<span v-if="optimalMin && optimalMax">{{ optimalMin }} bis {{ optimalMax }} Zeichen</span>\n    ' +
  '<span v-if="optimalMin && !optimalMax">min. {{ optimalMin }} Zeichen</span>\n    ' +
  '<span v-if="!optimalMin && optimalMax">max. {{ optimalMax }} Zeichen</span>\n    ' +
  '<span>(Aktuell: {{ data.length }})</span>\n  ' +
  '</p>\n</small>\n' +
  '<input type="text" :class="classes" v-model="data"/>',

  props: ['name', 'data', 'config'],

  data: function () {
    return {
      status: 'loading',
      low: this.config.low,
      high: this.config.high,
      optimalMin: this.config.optimal_min || this.config.low,
      optimalMax: this.config.optimal_max || this.config.high
    };
  },

  computed: {
    classes: function () {
      return 'form-control type-' + this.config.type + ' status-' + this.status;
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
