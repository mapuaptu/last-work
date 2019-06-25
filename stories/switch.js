import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Switch } from '../src/index';

export default () =>
  storiesOf('Switch', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-switch': Switch },
        template: `<dd-switch>
          <template #on>ON</template>
          <template #off>OFF</template>
        </dd-switch>`,
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
