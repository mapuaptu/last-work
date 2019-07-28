export default {
  name: 'DdCol',
  props: {
    size: {
      type: [String, Number],
      default: null,
    },
    xs: {
      type: String,
      default: null,
    },
    vs: {
      type: String,
      default: null,
    },
    sm: {
      type: String,
      default: null,
    },
    md: {
      type: String,
      default: null,
    },
    lg: {
      type: String,
      default: null,
    },
    xl: {
      type: String,
      default: null,
    },
    offsetXs: {
      type: [String, Number],
      default: null,
    },
    offsetVs: {
      type: [String, Number],
      default: null,
    },
    offsetSm: {
      type: [String, Number],
      default: null,
    },
    offsetMd: {
      type: [String, Number],
      default: null,
    },
    offsetLg: {
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
    orderXs: {
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
    classList() {
      return [
        this.size ? this.$style[`col-${this.size}`] : this.$style['col-12'],
        this.xs && this.$style[`col-xs-${this.xs}`],
        this.vs && this.$style[`col-vs-${this.vs}`],
        this.sm && this.$style[`col-sm-${this.sm}`],
        this.md && this.$style[`col-md-${this.md}`],
        this.lg && this.$style[`col-lg-${this.lg}`],
        this.xl && this.$style[`col-xl-${this.xl}`],
        this.offset && this.$style[`offset-${this.offset}`],
        this.offsetXs && this.$style[`offset-xs-${this.offsetXs}`],
        this.offsetVs && this.$style[`offset-vs-${this.offsetVs}`],
        this.offsetSm && this.$style[`offset-sm-${this.offsetSm}`],
        this.offsetSm && this.$style[`offset-sm-${this.offsetSm}`],
        this.offsetMd && this.$style[`offset-md-${this.offsetMd}`],
        this.offsetLg && this.$style[`offset-lg-${this.offsetLg}`],
        this.order && this.$style[`order-${this.order}`],
        this.orderXl && this.$style[`order-xl-${this.orderXl}`],
        this.orderLg && this.$style[`order-lg-${this.orderLg}`],
        this.orderMd && this.$style[`order-md-${this.orderMd}`],
        this.orderSm && this.$style[`order-sm-${this.orderSm}`],
        this.orderVs && this.$style[`order-vs-${this.orderVs}`],
        this.orderXs && this.$style[`order-xs-${this.orderXs}`],
        this.justify && this.$style[`justify-content-${this.justify}`],
        this.align && this.$style[`align-items-${this.align}`],
        this.self && this.$style[`align-self-${this.self}`],
        this.$style.flex,
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
