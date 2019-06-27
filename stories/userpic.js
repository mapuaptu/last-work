import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Userpic } from '../src/index';

export default () =>
  storiesOf('Userpic', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-userpic': Userpic },
        template: '<dd-userpic></dd-userpic>',
      }),
      {
        info: {
          summary: 'Default userpic',
        },
      },
    );
