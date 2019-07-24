import { Calendar, DatePicker, setupCalendar } from 'v-calendar';
import { directive as clickOutside } from 'v-click-outside';

setupCalendar({});

export default {
  name: 'DdDatepicker',
  directives: {
    clickOutside,
  },
  components: {
    'v-calendar': Calendar,
    'v-date-picker': DatePicker,
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
