import Vue from 'vue';
import VCalendar from 'v-calendar';

Vue.use(VCalendar, {});

export default {
  name: 'DdDatepicker',
  props: {
    value: {
      type: Date,
      default: () => new Date(),
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
