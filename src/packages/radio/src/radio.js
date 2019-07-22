export default {
  name: 'DdRadio',
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
    onChange(event) {
      this.$emit('input', event.target.value);
    },
  },
};
