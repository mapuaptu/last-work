import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Spinner } from '../index';

const options = {
  size: 100,
};

export default () =>
  storiesOf('Spinner', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { [Spinner.name]: Spinner },
        props: {
          size: {
            default: number('Size', options.size),
          },
        },
        template: '<dd-spinner :size="size"></dd-spinner>',
      }),
      {
        info: {
          summary: 'Default spinner',
        },
      },
    );
