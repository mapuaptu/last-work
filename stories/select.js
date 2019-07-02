import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Select } from '../src/index';

const options = {
  placeholder: 'Please select country',
  disabled: false,
};

export default () =>
  storiesOf('Select', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-select': Select },
        data() {
          return {
            value: '',
            countries: [
              'Afghanistan',
              'Albania',
              'Algeria',
              'American Samoa',
              'Andorra',
            ],
          };
        },
        props: {
          placeholder: {
            default: text('Placeholder', options.placeholder),
          },
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
        },
        template: `<dd-select v-model="value" :options="countries"
          :disabled="disabled" :placeholder="placeholder" @input="onInput">
          </dd-select>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default select',
        },
      },
    );
