import { directive as clickOutside } from 'v-click-outside';
import { Icon } from '../../../index';

export default {
  name: 'dd-dropdown',
  components: { 'dd-icon': Icon },
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
