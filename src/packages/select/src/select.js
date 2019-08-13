import Multiselect from 'vue-multiselect';

export default {
  name: 'DdSelect',
  components: { Multiselect },
  props: {
    value: {
      type: [String, Number, Object],
      default: null,
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
    image: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return [
        this.$style.select,
        this.status && this.$style['select--status'],
        this.disabled && this.$style['select--disabled'],
        this.image && this.$style['select--image'],
      ];
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);

      if (this.status) {
        this.$emit('input:status', value);
      }
    },
  },
};
