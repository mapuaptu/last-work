import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { InputSplit } from '../src/index';

export default () =>
  storiesOf('InputSplit', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-input-split': InputSplit,
        },
        template: '<dd-input-split>input split</dd-input-split>',
      }),
      {
        info: {
          summary: 'Default input-split',
        },
      },
    );
