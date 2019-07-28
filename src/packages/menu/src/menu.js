import { directive as clickOutside } from 'v-click-outside';

export default {
  name: 'DdMenu',
  directives: {
    clickOutside,
  },
  data() {
    return {
      mobileOpen: false,
    };
  },
  methods: {
    onClick() {
      this.mobileOpen = !this.mobileOpen;
    },
    onClickOutside() {
      this.mobileOpen = false;
    },
  },
};
