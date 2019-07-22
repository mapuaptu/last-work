export default {
  name: 'DdSwitch',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.switch,
        this.disabled && this.$style['switch--disabled'],
        this.value && this.$style['switch--checked'],
      ];
    },
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.checked);
    },
  },
};
