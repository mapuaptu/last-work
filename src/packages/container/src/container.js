export default {
  name: 'UiContainer',
  props: {
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classes: {
        fluid: this.fluid ? 'ez-container-fluid' : 'ez-container',
      },
    };
  },
  computed: {
    classList() {
      return [this.classes.fluid];
    },
  },
};
