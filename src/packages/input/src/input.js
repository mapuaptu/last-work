export default {
  name: 'dd-input',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
  inject: {
    root: {
      default: null,
    },
  },
};
