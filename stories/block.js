import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Block } from '../src/index';

const options = {
  statuses: ['progress', 'waiting', 'testing', 'complete', 'default'],
  status: 'progress',
  text: 'Block content here',
};

export default () =>
  storiesOf('Block', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-block': Block },
        props: {
          status: {
            default: select('Status', options.statuses, options.status),
          },
          text: {
            default: text('Default slot', options.text),
          },
        },
        template: `<div :style="{width: '500px'}">
      <dd-block :status="status">{{text}}</dd-block>
    </div>`,
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    );
