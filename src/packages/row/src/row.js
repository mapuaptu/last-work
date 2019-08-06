export default {
  name: 'DdRow',
  props: {
    gutter: {
      type: [Number, String],
      default: null,
    },
    justify: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: '',
    },
  },
  computed: {
    classList() {
      return [
        this.$style.row,
        this.justify && this.$style[`justify-content-${this.justify}`],
        this.align && this.$style[`align-items-${this.align}`],
      ];
    },
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
