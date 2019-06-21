import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from '../src/index';

const options = {
  text: 'Hello Dashdojo',
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
  fluid: false,
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
            default: text('Text', options.text),
          },
          types: {
            default: select('Types', options.type, options.type.Primary),
          },
          sizes: {
            default: select('Sizes', options.size, options.size.Default),
          },
          icons: {
            default: select('Icons', options.icon, options.icon.None),
          },
          fluid: {
            default: boolean('Fluid', options.fluid),
          },
        },
        template: `<dd-button :icon="icons" :type="types" :size="sizes"
          :fluid="fluid"
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
