export default {
  name: 'UiRow',
  props: {
    gutter: [Number, String],
    parentOffset: {
      type: Boolean,
      default: true,
    },
    justify: {
      type: String,
      default: 'start',
    },
    align: {
      type: String,
      default: 'start',
    },
  },
  computed: {
    styleList() {
      const result = {};

      if (this.gutter && this.parentOffset) {
        const margin = `-${Number(this.gutter) / 2}px`;

        result.marginLeft = margin;
        result.marginRight = margin;
      }

      return result;
    },
  },
};
