import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Select } from '../src/index';

const options = {};

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
