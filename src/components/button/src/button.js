export default {
  name: 'EzButton',
  props: {
    nativeType: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'default',
    },
    size: String,
    disabled: Boolean,
    outline: Boolean,
    round: Boolean,
    text: Boolean,
    readonly: Boolean,
    block: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: [Boolean, String],
      default: null,
    },
    iconColor: {
      type: String,
      default: null,
    },
    iconSizeForce: {
      type: [Number, String],
      default: 0,
    },
    caret: {
      type: Boolean,
      default: false,
    },
    preloader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // TODO: ааЕбаЕаПаИбаАбб аВ computed баВаОаЙббаВаА
      // Тест ресайза
      window: {
        width: 0,
        height: 0,
      },
      // testPreloader: false,
    };
  },
  inject: {
    getSolidAttr: {
      default: false,
    },
  },
  created() {
    // Тест ресайза
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }, // Тест ресайза END
  computed: {
    classList() {
      return [
        this.type && this.type !== 'custom' ? `is-${this.type}` : '',
        this.size ? `is-${this.size}` : '',
        this.outline ? 'is-outline' : '',
        this.round ? 'is-round' : '',
        this.circle && this.icon ? 'is-circle' : '',
        this.text ? 'is-text' : '',
        this.readonly ? 'is-readonly' : '',
        this.block ? 'is-block' : '',
        this.icon ? this.isIcon(this.icon) : '',
        this.getSolidAttr ? 'is-solid' : '',
        this.caret ? 'is-caret' : '',
        this.preloader ? 'is-loading' : '',
      ];
    },
  },
  mounted() {},
  methods: {
    handleResize() {
      // Тест ресайза
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    onClick(event) {
      // BEGIN test preloader
      // if (this.testPreloader == false) {
      //   this.testPreloader = true;
      //   setTimeout(() => {
      //     this.testPreloader = false;
      //   }, 2000);
      // }
      // END test preloader

      this.$emit('click', event);
    },
    isIcon() {
      return this.$slots.default ? 'is-with-icon' : 'is-icon';
    },
  },
};
