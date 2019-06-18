export default {
  name: 'dd-form-field',
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      status: this.status,
    };
  },
};
