import Icon from '../../icon/index';

export default {
  name: 'DdButton',
  components: { [Icon.name]: Icon },
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
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
        this.type && this.$style[`button--${this.type}`],
        this.size && this.$style[`button--${this.size}`],
        this.fluid && this.$style['button--fluid'],
        this.icon && this.$style['button--icon'],
        this.rounded && this.$style['button--rounded'],
        !this.$slots.default && this.$style['button--notext'],
      ];
    },
  },
};
