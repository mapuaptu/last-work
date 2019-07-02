import Multiselect from 'vue-multiselect';

export default {
  name: 'dd-select',
  components: { Multiselect },
  props: {
    value: {
      type: [String, Number, Object],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
