export default {
  name: 'Checkbox',
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
};
