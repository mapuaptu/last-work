import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, number, text, color } from '@storybook/addon-knobs';
import { Icon } from '../index';

const options = {
  name: 'air-freshener',
  size: 40,
  color: '#005291',
};

export default () =>
  storiesOf('Icon', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-icon': Icon,
        },
        props: {
          name: {
            default: text('Name', options.name),
          },
          size: {
            default: number('Size', options.size),
          },
          color: {
            default: color('Color', options.color),
          },
        },
        template:
          '<dd-icon :name="name" :size="size" :color="color"></dd-icon>',
      }),
      {
        info: {
          summary: 'Default icon',
        },
      },
    );
