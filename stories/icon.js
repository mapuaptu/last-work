import { storiesOf } from '@storybook/vue';
import { Icon } from '../src/index';

export default () =>
  storiesOf('Icon', module).add('default', () => ({
    components: {
      'dd-icon': Icon,
    },
    template: '<dd-icon></dd-icon>',
  }));
