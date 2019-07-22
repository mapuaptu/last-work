import Userpic from '../../userpic/index';
import Icon from '../../icon/index';

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
        this.root.status && this.$style[`input--${this.root.status}`],
        this.size && this.$style[`input--${this.size}`],
        this.image && this.$style['input--image'],
      ];
    },
    imageSize() {
      let size;

      switch (this.size) {
        case 'small':
          size = 20;
          break;

        case 'default':
          size = 24;
          break;

        case 'medium':
          size = 28;
          break;

        case 'large':
          size = 32;
          break;

        default:
          size = 24;
          break;
      }

      return size;
    },
    iconName() {
      let name = '';

      if (this.root.status) {
        switch (this.root.status) {
          case 'success':
            name = 'check-circle';
            break;

          case 'error':
            name = 'exclamation-circle';
            break;

          default:
            break;
        }
      }

      return name;
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
