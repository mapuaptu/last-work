export default {
  name: 'DdCntainer',
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
