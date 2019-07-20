import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Switch } from '../index';

const options = {
  disabled: false,
  text: 'Radio with text',
};

export default () =>
  storiesOf('Switch', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-switch': Switch },
        data() {
          return {
            checked: false,
          };
        },
        props: {
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
          text: {
            default: text('Slot default', options.text),
          },
        },
        template: `<dd-switch v-model="checked" :disabled="disabled"
        @input="onInput">{{text}}</dd-switch>`,
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
