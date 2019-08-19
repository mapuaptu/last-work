import { directive as clickOutside } from 'v-click-outside';
import Icon from '../../icon';

export default {
  name: 'DdDropdown',
  components: { [Icon.name]: Icon },
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
    onClose() {
      this.$emit('input', false);
    },
  },
};
