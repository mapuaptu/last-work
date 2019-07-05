import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Progressbar } from '../src/index';

export default () =>
  storiesOf('Progressbar', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-progressbar': Progressbar,
        },
        template: '<dd-progressbar></dd-progressbar>',
      }),
      {
        info: {
          summary: 'Default progressbar',
        },
      },
    );
