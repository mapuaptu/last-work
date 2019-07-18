export default {
  name: 'DdInputSplit',
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
  },
  inject: {
    root: {
      default: null,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
