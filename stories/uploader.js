import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Uploader } from '../src/index';

export default () =>
  storiesOf('Uploader', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-uploader': Uploader },
        template: '<dd-uploader>upload content</dd-uploader>',
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
