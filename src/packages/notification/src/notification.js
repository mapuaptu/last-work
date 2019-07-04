export default {
  name: 'dd-notification',
  props: {
    status: {
      type: String,
      default: 'default',
    },
  },
  computed: {
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
