export default {
  name: 'DdCol',
  props: {
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
    size: {
      type: [String, Number],
      default: null,
    },
    xl: {
      type: [String, Number],
      default: null,
    },
    lg: {
      type: [String, Number],
      default: null,
    },
    md: {
      type: [String, Number],
      default: null,
    },
    sm: {
      type: [String, Number],
      default: null,
    },
    vs: {
      type: [String, Number],
      default: null,
    },
    offsetXs: {
      type: [String, Number],
      default: null,
    },
    offset: {
      type: [String, Number],
      default: null,
    },
    offsetXl: {
      type: [String, Number],
      default: null,
    },
    offsetLg: {
      type: [String, Number],
      default: null,
    },
    offsetMd: {
      type: [String, Number],
      default: null,
    },
    offsetSm: {
      type: [String, Number],
      default: null,
    },
    offsetVs: {
      type: [String, Number],
      default: null,
    },
    order: {
      type: [String, Number],
      default: null,
    },
    orderXl: {
      type: [String, Number],
      default: null,
    },
    orderLg: {
      type: [String, Number],
      default: null,
    },
    orderMd: {
      type: [String, Number],
      default: null,
    },
    orderSm: {
      type: [String, Number],
      default: null,
    },
    orderVs: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.flex,
        this.justify && this.$style[`justify-content-${this.justify}`],
        this.align && this.$style[`align-items-${this.align}`],
        this.self && this.$style[`align-self-${this.self}`],
        this.size ? this.$style[`col-${this.size}`] : this.$style['col-12'],
        this.xl && this.$style[`col-xl-${this.xl}`],
        this.lg && this.$style[`col-lg-${this.lg}`],
        this.md && this.$style[`col-md-${this.md}`],
        this.sm && this.$style[`col-sm-${this.sm}`],
        this.vs && this.$style[`col-vs-${this.vs}`],
        this.offset && this.$style[`offset-${this.offset}`],
        this.offsetXl && this.$style[`offset-xl-${this.offsetXl}`],
        this.offsetLg && this.$style[`offset-lg-${this.offsetLg}`],
        this.offsetMd && this.$style[`offset-md-${this.offsetMd}`],
        this.offsetSm && this.$style[`offset-sm-${this.offsetSm}`],
        this.offsetVs && this.$style[`offset-vs-${this.offsetVs}`],
        this.order && this.$style[`order-${this.order}`],
        this.orderXl && this.$style[`order-xl-${this.orderXl}`],
        this.orderLg && this.$style[`order-lg-${this.orderLg}`],
        this.orderMd && this.$style[`order-md-${this.orderMd}`],
        this.orderSm && this.$style[`order-sm-${this.orderSm}`],
        this.orderVs && this.$style[`order-vs-${this.orderVs}`],
      ];
    },
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
