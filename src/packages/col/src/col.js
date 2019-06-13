export default {
  name: 'UiCol',
  props: {
    size: {
      type: [String, Number],
      default: null,
    },
    offset: {
      type: [String, Number],
      default: null,
    },
    order: {
      type: [String, Number],
      default: null,
    },
    justify: {
      type: String,
      default: null,
    },
    align: {
      type: String,
      default: null,
    },
    self: {
      type: String,
      default: null,
    },
  },
  computed: {
    styleGutter() {
      const result = {};

      if (this.$parent.gutter) {
        const padding = `${this.$parent.gutter / 2}px`;

        result.paddingLeft = padding;
        result.paddingRight = padding;
      }

      return result;
    },
  },
};
