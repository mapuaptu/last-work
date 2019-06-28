import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Checkbox } from '../src/index';

const options = {
  disabled: false,
  text: '',
};

export default () =>
  storiesOf('Checkbox', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-checkbox': Checkbox },
        props: {
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
          label: {
            default: text('Default slot', options.text),
          },
        },
        data() {
          return {
            checked: false,
          };
        },
        template: `<dd-checkbox v-model="checked" :disabled="disabled"
        @input="onInput">{{label}}</dd-checkbox>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default checkbox',
        },
      },
    );
