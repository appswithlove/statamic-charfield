Statamic.$components.register('char_field-fieldtype', {

  template: `<div :class="['charfield-container', statusClass]">
  <text-input
    v-if="isInput"
    ref="input"
    :value="value"
    :classes="config.classes"
    :focus="config.focus || name === 'title'"
    :autoselect="config.autoselect"
    :type="config.input_type"
    :isReadOnly="isReadOnly"
    :prepend="config.prepend"
    :append="config.append"
    :limit="config.hard_limit || null"
    :placeholder="config.placeholder"
    :name="name"
    :id="fieldId"
    @input="updateDebounced"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    />
  <textarea-input
    v-if="isTextarea"
    :classes="config.classes"
    :name="name"
    :isReadOnly="isReadOnly"
    :limit="config.hard_limit || null"
    :placeholder="config.placeholder"
    :value="value"
    :id="fieldId"
    @blur="$emit('blur')"
    @focus="$emit('focus')"
    @input="updateDebounced"
    />
  
  <div class="help-block" v-if="optimalMin || optimalMax || high">
      <p>
          <small v-if="optimalMin && optimalMax">{{ translate("statamic-charfield::fieldtypes.ideal_x", {min: optimalMin, max: optimalMax}) }}</small>
          <small v-if="optimalMin && !optimalMax">{{ translate("statamic-charfield::fieldtypes.min_x", {min: optimalMin}) }}</small>
          <small v-if="!optimalMin && (optimalMax || high)">{{ translate("statamic-charfield::fieldtypes.max_x", {max: optimalMax || high}) }}</small>
          <small>&gt; {{ translate("statamic-charfield::fieldtypes.current") }} <strong>{{ dataLength }}</strong></small>
      </p>
  </div>
</div>`,

  mixins: [Fieldtype],
  props: ['name', 'data', 'config'],

  data: function () {
    return {
      isTextarea: this.config.input_type === 'textarea',
      isInput: this.config.input_type !== 'textarea',
      low: this.config.low,
      high: this.config.high || this.config.hard_limit,
      optimalMin: this.config.optimal_min || this.config.low,
      optimalMax: this.config.optimal_max || this.config.high,
    };
  },

  computed: {
    dataLength: function () {
      return this.value ? this.value.length : 0;
    },

    statusClass: function () {
      var length = this.dataLength;

      if (this.low !== false && length < this.low) {
        return 'status-low';
      } else if (this.high !== false && length > this.high) {
        return 'status-high';
      }

      if (this.optimalMin && this.optimalMax) {
        if (length >= this.optimalMin && length <= this.optimalMax) {
          return 'status-good';
        }

        return 'status-ok';
      }

      return 'status-good';
    },
  },

  methods: {
    eventInput: function ($event) {
      this.updateDebounced($event.target.value);
    },
  },
});
