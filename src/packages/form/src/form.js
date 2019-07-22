export default {
  name: 'DdForm',
  methods: {
    onSubmit(event) {
      this.$emit('submit', event);
    },
  },
};
