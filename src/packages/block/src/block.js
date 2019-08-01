export default {
  name: 'DdBlock',
  props: {
    status: {
      type: String,
      default: '',
    },
    empty: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    link: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.block,
        this.status && this.$style[`block--${this.status}`],
        this.empty && this.$style['block--empty'],
        this.size && this.$style[`block--${this.size}`],
        this.link && this.$style['block--link'],
        this.disabled && this.$style['block--disabled'],
      ];
    },
  },
};
