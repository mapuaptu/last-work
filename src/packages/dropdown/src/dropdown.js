export default {
  name: 'dd-dropdown',
  props: {
    value: Boolean,
    default: false,
  },
  methods: {
    onClick() {
      this.$emit('input', !this.value);
    },
  },
};
