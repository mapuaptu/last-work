export default {
  name: 'DdContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.container,
        this.fluid && this.$style['container-fluid'],
      ];
    },
  },
};
