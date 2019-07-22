import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, number } from '@storybook/addon-knobs';
import { Logo } from '../index';

const options = {
  size: 381,
};

export default () =>
  storiesOf('Logo', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          [Logo.name]: Logo,
        },
        props: {
          size: {
            default: number('Size', options.size),
          },
        },
        template: '<dd-logo :size="size"></dd-logo>',
      }),
      {
        info: {
          summary: 'Default dropdown',
        },
      },
    );
