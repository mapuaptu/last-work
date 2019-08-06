import Icon from '../../icon/index';

export default {
  name: 'DdNotification',
  components: {
    [Icon.name]: Icon,
  },
  props: {
    status: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classList() {
      return [
        this.$style.notification,
        this.status !== 'default'
          ? this.$style[`notification--${this.status}`]
          : '',
      ];
    },
    icon() {
      let icon = '';

      switch (this.status) {
        case 'error':
          icon = 'hand-paper';
          break;

        case 'warning':
          icon = 'exclamation-triangle';
          break;

        case 'success':
          icon = 'check';
          break;

        case 'info':
          icon = 'info';
          break;

        default:
          break;
      }

      return icon;
    },
  },
};
