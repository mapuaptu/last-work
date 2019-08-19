import Userpic from '../../userpic';
import Icon from '../../icon';

export default {
  name: 'DdInput',
  components: {
    [Userpic.name]: Userpic,
    [Icon.name]: Icon,
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
  computed: {
    classList() {
      return [
        this.$style.input,
        this.disabled && this.$style['input--disabled'],
        this.root.status && this.$style['input--status'],
        this.root.status && this.$style[`input--${this.root.status}`],
        this.size && this.$style[`input--${this.size}`],
        this.image && this.$style['input--image'],
      ];
    },
    imageSize() {
      const sizes = {
        small: 20,
        medium: 28,
        large: 32,
        default: 24,
      };

      return sizes[this.size] || sizes.default;
    },
    iconName() {
      const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
      };

      return icons[this.root.status];
    },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
  inject: {
    root: {
      default: { status: '' },
    },
  },
};
