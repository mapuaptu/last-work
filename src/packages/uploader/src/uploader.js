export default {
  name: 'dd-uploader',
  methods: {
    onChange(event) {
      this.emit('input', event);
    },
    onDelete() {
      this.$emit('delete');
    },
  },
};
