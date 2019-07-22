import Vue from 'vue';
import VCalendar from 'v-calendar';
import { directive as clickOutside } from 'v-click-outside';

Vue.use(VCalendar, {});

export default {
  name: 'DdDatepicker',
  directives: {
    clickOutside,
  },
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    classList() {
      return [
        this.$style.datepicker,
        this.focus && this.$style['datepicker--focus'],
      ];
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
      this.focus = false;
    },
    onClick() {
      this.focus = true;
    },
    onClickOutside() {
      this.focus = false;
    },
  },
};
