export default {
  name: 'dd-form-field',
  props: {
    status: {
      type: String,
      default: '',
    },
  },
  provide() {
    const root = {};

    Object.defineProperty(root, 'status', {
      enumerable: true,
      get: () => this.status,
    });

    return { root };
  },
};
