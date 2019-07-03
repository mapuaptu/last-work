import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Card } from '../src/index';

export default () =>
  storiesOf('Card', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-card': Card },
        props: {},
        template: `<dd-card>card content</dd-card>`,
      }),
      {
        info: {
          summary: 'Default card',
        },
      },
    );
