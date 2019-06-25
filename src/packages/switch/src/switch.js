export default {
  name: 'dd-switch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
