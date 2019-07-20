import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { InputSplit, FormField } from '../index';

const options = {
  placeholder: 'Example placeholder',
  disabled: false,
  statuses: ['default', 'success', 'error'],
  label: 'label',
  message: 'message',
  domen: 'dashdojo.com',
};

export default () =>
  storiesOf('InputSplit', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-input-split': InputSplit,
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
          domen: {
            default: text('Domen', options.domen),
          },
        },
        data() {
          return {
            model: 'buchkodex',
          };
        },
        template: `<dd-form-field status="default" :status="status">
          <dd-input-split v-model="model" :placeholder="placeholder"
            :disabled="disabled">
            .{{domen}}
          </dd-input-split>
          <template #label>{{label}}</template>
          <template #message>{{message}}</template>
        </dd-form-field>
        `,
      }),
      {
        info: {
          summary: 'Default input-split',
        },
      },
    );
