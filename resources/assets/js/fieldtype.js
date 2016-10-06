Vue.component('char_field-fieldtype', {

  template: '<small class="help-block">\n  <p>{{ optimalLow }} bis {{ optimalHigh }} Zeichen (Aktuell: {{ data.length }})</p>\n</small>\n<input type="text" :class="classes" v-model="data" />',

  props: ['name', 'data', 'config'],

  data: function () {
    var data = {
      status: 'loading',
      low: this.config.low,
      high: this.config.high,
      optimalLow: this.config.optimal_low || this.config.low,
      optimalHigh: this.config.optimal_high || this.config.high
    };

    return data;
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

      if (this.optimalLow && this.optimalHigh) {
        if (length >= this.optimal[0] && length <= this.optimal[1]) {
          return 'good';
        }

        return 'ok';
      }

      return 'good';
    }
  }
});
