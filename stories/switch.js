import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Switch } from '../src/index';

export default () =>
  storiesOf('Switch', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-switch': Switch },
        template: '<dd-switch></dd-switch>',
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
