Statamic.booting(() => {
  Statamic.$components.register('char_field-fieldtype', {
    props: {
      name: String,
      config: { type: Object, default: () => ({}) },
      fieldId: String,
      isReadOnly: Boolean,
      value: String,
    },

    data() {
      return {
        internalValue: this.value || '',
        isTextarea: this.config.input_type === 'textarea',
        isInput: this.config.input_type !== 'textarea',
        low: this.config.low,
        high: this.config.high || this.config.hard_limit,
        optimalMin: this.config.optimal_min || this.config.low,
        optimalMax: this.config.optimal_max || this.config.high,
      };
    },

    computed: {
      statusClass() {
        const length = this.internalValue.length;
        if (this.low !== false && length < this.low) return 'status-low';
        if (this.high !== false && length > this.high) return 'status-high';
        if (this.optimalMin && this.optimalMax) {
          if (length >= this.optimalMin && length <= this.optimalMax) return 'status-good';
          return 'status-ok';
        }
        return 'status-good';
      },
      idealText() {
        return __("statamic-charfield::fieldtypes.ideal_x").replace(':min', this.optimalMin).replace(':max', this.optimalMax);
      },
      minText() {
        return __("statamic-charfield::fieldtypes.min_x").replace(':min', this.optimalMin);
      },
      maxText() {
        return __("statamic-charfield::fieldtypes.max_x").replace(':max', this.optimalMax || this.high);
      },
      currentText() {
        return __('statamic-charfield::fieldtypes.current');
      }
    },

    methods: {
      update(value) {
        this.$emit('update:value', value);
      },
    },

    template: `
      <div :class="['charfield-container', statusClass]">
        <ui-input
          v-if="isInput"
          v-model="internalValue"
          ref="config.handle"
          :classes="config.classes"
          :focus="config.focus"
          :autoselect="config.autoselect"
          :type="config.input_type"
          :isReadOnly="isReadOnly"
          :prepend="config.prepend"
          :append="config.append"
          :limit="config.hard_limit || null"
          :placeholder="config.placeholder"
          :name="config.handle"
          :id="fieldId"
          @update:model-value="update"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />
        <ui-textarea
          v-if="isTextarea"
          v-model="internalValue"
          :classes="config.classes"
          :isReadOnly="isReadOnly"
          :limit="config.hard_limit || null"
          :placeholder="config.placeholder"
          :name="config.handle"
          :id="fieldId"
          @update:model-value="update"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />
        <div class="help-block" v-if="optimalMin || optimalMax || high">
          <p>
            <small v-if="optimalMin && optimalMax">{{ idealText }}</small>
            <small v-else-if="optimalMin && !optimalMax">{{ minText }}</small>
            <small v-else-if="!optimalMin && (optimalMax || high)">{{ maxText }}</small>
            <small> &gt; {{ currentText }} <strong>{{ internalValue.length }}</strong></small>
          </p>
        </div>
      </div>
    `,
  });
});
