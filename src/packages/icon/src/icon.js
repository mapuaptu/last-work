export default {
  name: 'DdIcon',
  props: {
    name: {
      type: String,
      default: 'circle',
    },
    size: {
      type: Number,
      default: null,
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    styleList() {
      return {
        fontSize: this.size && `${this.size}px`,
        lineHeight: this.size && `${this.size}px`,
        color: this.color,
      };
    },
  },
};
