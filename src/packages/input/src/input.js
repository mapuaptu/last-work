// import Inputmask from 'inputmask';

export default {
  name: 'dd-input',
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
    mask: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
  inject: {
    status: {
      default: null,
    },
  },
  mounted() {
    if (this.mask) {
      // Inputmask(this.mask).mask(this.$refs.input);
    }
  },
};
