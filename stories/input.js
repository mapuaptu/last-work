import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { Input, FormField } from '../src/index';

const options = {
  placeholder: 'Example placeholder',
  disabled: false,
  statuses: ['default', 'success', 'error'],
  label: 'label',
  message: 'message',
};

export default () =>
  storiesOf('Input', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-input': Input,
          'dd-form-field': FormField,
        },
        props: {
          placeholder: {
            default: text('Placeholder', options.placeholder),
          },
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
          status: {
            default: select('Status', options.statuses, options.status),
          },
          label: {
            default: text('Label', options.label),
          },
          message: {
            default: text('Message', options.message),
          },
        },
        data() {
          return {
            model: 'Example text field',
          };
        },
        template: `<dd-form-field :style="{maxWidth: '500px'}" :status="status">
        <dd-input v-model="model" :placeholder="placeholder"
        :disabled="disabled" @input="onInput">
        </dd-input>
        <template #label>{{label}}</template>
        <template #message>{{message}}</template>
      </dd-form-field>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    );
