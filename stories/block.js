import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Block, Select } from '../src/index';

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
        template: '<dd-block :status="status">{{text}}</dd-block>',
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    )
    .add(
      'With status',
      () => ({
        components: { 'dd-block': Block, 'dd-select': Select },
        data() {
          return {
            options: [
              { id: 'progress', label: 'In progress' },
              { id: 'planned', label: 'Planned' },
              { id: 'waiting', label: 'Waiting' },
              { id: 'testing', label: 'Testing' },
              { id: 'complete', label: 'Done' },
            ],
            value: { id: 'progress', label: 'In progress' },
          };
        },
        template: `<dd-block :status="value.id">
          <dd-select :value="value" @input:status="value = $event"
          :options="options" status>
          </dd-select>
        </dd-block>`,
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    );
