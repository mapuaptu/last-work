import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from '../src/index';

const options = {
  type: {
    Primary: 'primary',
    Secondary: 'secondary',
  },
  size: {
    Default: '',
    Small: 'small',
    Large: 'large',
  },
  icon: {
    None: '',
    'Adress Card': 'address-card',
    Archive: 'archive',
  },
};

export default () =>
  storiesOf('Button', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-button': Button },
        props: {
          text: {
            default: text('Text', 'Hello Dashdojo'),
          },
          types: {
            default: select('Types', options.type, 'primary'),
          },
          sizes: {
            default: select('Sizes', options.size, 'default'),
          },
          icons: {
            default: select('Icons', options.icon, ''),
          },
        },
        template: `<dd-button :icon="icons" :type="types" :size="sizes"
          @click="onClick">{{text}}</dd-button>`,
        methods: {
          onClick: action('click'),
        },
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    );
