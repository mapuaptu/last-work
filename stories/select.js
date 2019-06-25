import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Select } from '../src/index';

export default () =>
  storiesOf('Select', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-select': Select },
        template: '<dd-select :value="123" :options="[123, 321]"></dd-select>',
      }),
      {
        info: {
          summary: 'Default select',
        },
      },
    );
