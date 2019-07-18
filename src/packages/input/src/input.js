import Userpic from '../../userpic/index';

export default {
  name: 'dd-input',
  components: {
    'dd-userpic': Userpic,
  },
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    image: {
      type: String,
      default: '',
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
  inject: {
    root: {
      default: null,
    },
  },
};
