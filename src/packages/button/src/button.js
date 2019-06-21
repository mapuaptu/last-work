export default {
  name: 'dd-button',
  props: {
    type: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.button,
        this.size && this.$style[`button--${this.size}`],
        this.type && this.$style[`button--${this.type}`],
        this.fluid && this.$style['button--fluid'],
        this.icon && this.$style['button--icon'],
        !this.$slots.default && this.$style['button--notext'],
      ];
    },
  },
};
