import { directive as clickOutside } from 'v-click-outside';

export default {
  name: 'dd-dropdown',
  directives: {
    clickOutside,
  },
  props: {
    value: Boolean,
    default: false,
  },
  methods: {
    onClick() {
      this.$emit('input', !this.value);
    },
    onClickOutside() {
      this.$emit('input', false);
    },
  },
};
