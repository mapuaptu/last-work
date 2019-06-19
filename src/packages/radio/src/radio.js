export default {
  name: 'dd-radio',
  props: {
    value: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
  computed: {
    isChecked() {
      return this.label === this.value;
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value);
    },
  },
};
