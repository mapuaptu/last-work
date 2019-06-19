export default {
  name: 'dd-form',
  methods: {
    onSubmit(event) {
      this.$emit('submit', event);
    },
  },
};
