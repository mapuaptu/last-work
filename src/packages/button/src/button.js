import Icon from '../../icon/index';

export default {
  name: 'DdButton',
  components: { [Icon.name]: Icon },
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
    rounded: {
      type: Boolean,
      default: false,
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
        this.rounded && this.$style['button--rounded'],
        !this.$slots.default && this.$style['button--notext'],
      ];
    },
  },
};
