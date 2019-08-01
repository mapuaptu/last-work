export default {
  name: 'DdCheckbox',
  props: {
    value: {
      type: [Array, Boolean],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.checkbox,
        this.value && this.$style['checkbox--checked'],
        this.disabled && this.$style['checkbox--disabled'],
      ];
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
