import Vue from 'vue';
import VueInputAutowidth from 'vue-input-autowidth';
import { directive as clickOutside } from 'v-click-outside';

Vue.use(VueInputAutowidth);

export default {
  name: 'DdInputSplit',
  directives: {
    clickOutside,
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
  inject: {
    root: {
      default: null,
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
};
