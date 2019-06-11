export default {
  name: 'ui-button',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    size: {
      type: String,
      default: 'default',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
