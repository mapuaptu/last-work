import { VueInputAutoWidth } from 'vue-input-autowidth';
import { directive as clickOutside } from 'v-click-outside';
import Icon from '../../icon';

export default {
  name: 'DdInputSplit',
  directives: {
    clickOutside,
    autowidth: VueInputAutoWidth,
  },
  components: {
    [Icon.name]: Icon,
  },
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
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
        this.$style['input-split'],
        this.disabled && this.$style['input-split--disabled'],
        this.root.status && this.$style['input-split--status'],
        this.root.status && this.$style[`input-split--${this.root.status}`],
        this.size && this.$style[`input-split--${this.size}`],
        this.focus && this.$style['input-split--focus'],
      ];
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
    onClick() {
      this.focus = true;
      this.$refs.input.focus();
    },
    onClickOutside() {
      this.focus = false;
    },
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
