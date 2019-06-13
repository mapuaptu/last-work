import EzButton from './../../button/src/button.vue';
import EzIcons from './../../icons';
import EzIcon from './../../icon/src/icon.vue';

// Documentation https://github.com/RobinHerbots/Inputmask/tree/5.x
import Inputmask from 'inputmask';

export default {
  name: 'EzInput',
  components: {
    EzButton,
    EzIcons,
    EzIcon,
  },
  inheritAttrs: false,
  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    tabindex: String,
    label: String,
    direction: String,
    icon: {
      type: String,
      default: '',
    },
    iconPosition: {
      type: String,
      default: 'right',
    },
    useslot: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      focused: false,
      classes: {
        size: this.size ? `is-${this.size}` : '',
        disabled: this.disabled ? `is-disabled` : '',
        solid: this.getSolidAttr ? `is-solid` : '',
        iconPosition: this.icon && this.iconPosition ? `is-icon-${this.iconPosition}` : '',
      },
      fileName: '',
    };
  },
  inject: {
    getSolidAttr: {
      default: false,
    },
    getMessageType: {
      default: false,
    },
  },
  computed: {
    messageType() {
      return this.getMessageType.type;
    },
    inputSize() {
      return this.size;
    },
    inputDisabled() {
      return this.disabled;
    },
    showIcon() {
      return this.icon.length > 0;
    },
    inputStatusIcon() {
      switch (this.messageType) {
        case 'error':
          return 'times-circle';
        case 'success':
          return 'check-circle';
      }
    },
    classList() {
      return [
        this.classes.size,
        this.classes.disabled,
        this.classes.solid,
        this.readonly && 'is-readonly',
        this.classes.iconPosition,
      ];
    },
    listeners() {
      return {
        ...this.$listeners,
        input: this.handleInput,
        focus: this.handleFocus,
        blur: this.handleBlur,
        change: this.handleChange,
      };
    },
  },
  mounted() {
    if (this.mask) {
      Inputmask(this.mask).mask(this.$refs.input);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleInput(event) {
      const value = event.target.value;
      this.$emit('input', value);
      this.$forceUpdate();
    },
    handleChange(event) {
      if (this.type === 'file') {
        this.fileName = event.target.value.split('\\').pop();
      }
      this.$emit('change', event.target.value, event.target.files);
      this.$forceUpdate();
    },
    handleIcon(event) {
      this.$emit('icon', event);
    },
    handleInputFile() {
      this.$refs.input.click();
      this.$refs.input.focus();
    },
  },
};
