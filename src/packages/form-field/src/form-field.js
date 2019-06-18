export default {
  name: 'dd-form-field',
  props: {
    status: {
      type: String,
      default: null,
    },
  },
  provide() {
    return {
      status: this.status,
    };
  },
};
