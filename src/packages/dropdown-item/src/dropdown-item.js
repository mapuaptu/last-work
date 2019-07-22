export default {
  name: 'DdDropdownItem',
  props: {
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    delimiter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style['dropdown-item'],
        this.disabled && this.$style['dropdown-item--disabled'],
        this.delimiter && this.$style['dropdown-item--delimiter'],
      ];
    },
  },
};
