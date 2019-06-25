import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Modal } from '../src/index';

export default () =>
  storiesOf('Modal', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-modal': Modal },
        template: '<dd-modal>content here</dd-modal>',
      }),
      {
        info: {
          summary: 'Default modal',
        },
      },
    );
