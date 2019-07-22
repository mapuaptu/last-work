export default {
  name: 'DdUploader',
  methods: {
    onInput(event) {
      const { target } = event;

      if (target.files && target.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const { result } = e.target;

          this.$emit('input', result);

          target.value = '';
        };

        reader.readAsDataURL(target.files[0]);
      }
    },
    onDelete() {
      this.$emit('delete');
    },
  },
};
