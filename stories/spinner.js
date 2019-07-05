import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Spinner } from '../src/index';

export default () =>
  storiesOf('Spinner', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-spinner': Spinner },
        template: '<dd-spinner></dd-spinner>',
      }),
      {
        info: {
          summary: 'Default spinner',
        },
      },
    );
