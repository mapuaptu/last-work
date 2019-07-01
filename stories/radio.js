import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Radio } from '../src/index';

const options = {
  disabled: false,
  label1: 'option 1',
  label2: 'option 2',
};

export default () =>
  storiesOf('Radio', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default ',
      () => ({
        components: {
          'dd-radio': Radio,
        },
        props: {
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
          label1: {
            default: text('Label 1', options.label1),
          },
          label2: {
            default: text('Label 2', options.label2),
          },
        },
        data() {
          return {
            checked: 'option 1',
          };
        },
        template: `<div style="display: flex">
        <dd-radio v-model="checked" :label="label1" :disabled="disabled"
        @input="onInput">
        </dd-radio>
        <dd-radio v-model="checked" :label="label2" :disabled="disabled"
        @input="onInput">
        </dd-radio>
      </div>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
