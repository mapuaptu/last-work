import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Switch } from '../src/index';

const options = {
  disabled: false,
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
            checked: true,
          };
        },
        props: {
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
        },
        template: `<dd-switch v-model="checked"
        :disabled="disabled" @input="onInput">
          <template #on>ON</template>
          <template #off>OFF</template>
        </dd-switch>`,
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
