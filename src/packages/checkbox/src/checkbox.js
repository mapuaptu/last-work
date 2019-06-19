export default {
  name: 'dd-checkbox',
  props: {
    value: {
      type: [Array, Boolean],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
