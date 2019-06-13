//import Inputmask from 'inputmask';

export default {
  name: 'Input',
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
    disabled: Boolean,
    // mask: {
    //   type: String,
    //   default: '',
    // },
  },
  data() {
    return {
      focused: false,
      classes: {
        disabled: this.disabled ? `is-disabled` : '',
      },
    };
  },
  computed: {
    classList() {
      return [this.classes.disabled];
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.handleInput,
        focus: this.handleFocus,
        blur: this.handleBlur,
        change: this.handleChange,
      };
    },
  },
  // mounted() {
  //   if (this.mask) {
  //     Inputmask(this.mask).mask(this.$refs.input);
  //   }
  // },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input', value);
      this.$forceUpdate();
    },
    handleChange(event) {
      this.$emit('change', event.target.value, event.target.files);
      this.$forceUpdate();
    },
  },
};
