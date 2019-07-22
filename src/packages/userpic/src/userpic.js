export default {
  name: 'DdUserpic',
  props: {
    url: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 33,
    },
  },
};
