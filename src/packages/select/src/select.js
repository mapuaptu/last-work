import Multiselect from 'vue-multiselect';

export default {
  name: 'dd-select',
  components: { Multiselect },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
};
