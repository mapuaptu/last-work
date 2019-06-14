import { storiesOf } from '@storybook/vue';
import { Logo } from '../src/index';

export default () =>
  storiesOf('Logo', module).add('default', () => ({
    components: {
      'dd-logo': Logo,
    },
    template: '<dd-logo></dd-logo>',
  }));
