import Icon from '../../icon';

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
      const icons = {
        error: 'hand-paper',
        warning: 'exclamation-triangle',
        success: 'check',
        info: 'info',
      };

      return icons[this.status];
    },
  },
};
