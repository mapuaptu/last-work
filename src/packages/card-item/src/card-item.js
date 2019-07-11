export default {
  name: 'DdCardItem',
  props: {
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    classList() {
      return [
        this.$style.item,
        this.color && this.$style[`item--${this.color}`],
      ];
    },
  },
};
