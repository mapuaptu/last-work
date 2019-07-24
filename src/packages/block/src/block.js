export default {
  name: 'DdBlock',
  props: {
    status: {
      type: String,
      default: '',
    },
    size: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'default',
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
        !this.size && this.$style['block--purge'],
        this.link && this.$style['block--link'],
        this.disabled && this.$style['block--disabled'],
        this.type && this.$style[`block--${this.type}`],
      ];
    },
  },
};
