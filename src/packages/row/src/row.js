export default {
  name: 'dd-row',
  props: {
    gutter: {
      type: [Number, String],
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
  },
  computed: {
    styleGutter() {
      const result = {};

      if (this.gutter) {
        const margin = `-${Number(this.gutter) / 2}px`;

        result.marginLeft = margin;
        result.marginRight = margin;
      }

      return result;
    },
  },
};
