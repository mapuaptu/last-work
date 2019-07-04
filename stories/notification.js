import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Notification } from '../src/index';

export default () =>
  storiesOf('Notification', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-notification': Notification,
        },
        template: '<dd-notification>note</dd-notification>',
      }),
      {
        info: {
          summary: 'Default notification',
        },
      },
    );
