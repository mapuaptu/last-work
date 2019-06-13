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
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    classes() {
      return {
        'is-disabled': this.disabled,
        'is-checked': this.value,
        [`is-${this.size}`]: this.size,
      };
    },
  },
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
