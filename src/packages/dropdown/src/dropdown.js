import { directive as clickOutside } from 'v-click-outside';

export default {
  name: 'dd-dropdown',
  directives: {
    clickOutside,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: 'ellipsis-h',
    },
    position: {
      type: String,
      default: 'bottom-right',
    },
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
