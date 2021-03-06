export default {
  name: 'DdRadio',
  props: {
    value: {
      type: String,
      default: '',
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
  computed: {
    classList() {
      return [
        this.$style.radio,
        this.isChecked && this.$style['radio--checked'],
        this.disabled && this.$style['radio--disabled'],
      ];
    },
    isChecked() {
      return this.label === this.value;
    },
  },
  methods: {
    onChange() {
      this.$emit('input', this.$refs.input.value);
    },
  },
};
