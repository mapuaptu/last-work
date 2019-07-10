export default {
  name: 'dd-block',
  props: {
    status: {
      type: String,
      default: '',
    },
    size: {
      type: Boolean,
      default: true,
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
};
