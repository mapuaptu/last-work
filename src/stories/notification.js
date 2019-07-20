import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Notification } from '../index';

const options = {
  statuses: ['default', 'error', 'warning', 'success', 'info'],
  status: 'default',
};

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
        props: {
          status: {
            default: select('Status', options.statuses, options.status),
          },
        },
        template: `<dd-notification :status="status">
          Hey Sir, this is some interesting message that you have to consider
          when doing this. Please note: Dashdojo is amazing and you will
          love it more than any other solution on the web. Share it with
          your friends and become a better human being when doing so.
          Thanks!
        </dd-notification>`,
      }),
      {
        info: {
          summary: 'Default notification',
        },
      },
    );
