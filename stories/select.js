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
        template: `<div :style="{width: '280px'}">
          <dd-select value="" :options="[123, 321]"
          placeholder="Please select country">
          </dd-select>
        </div>`,
      }),
      {
        info: {
          summary: 'Default select',
        },
      },
    );
