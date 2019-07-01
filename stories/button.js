import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from '../src/index';

const options = {
  text: 'Hello Dashdojo',
  type: {
    primary: 'primary',
    secondary: 'secondary',
  },
  size: {
    default: '',
    small: 'small',
    large: 'large',
  },
  icon: {
    none: '',
    addressCard: 'address-card',
    archive: 'archive',
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
          type: {
            default: select('Type', options.type, options.type.primary),
          },
          size: {
            default: select('Size', options.size, options.size.default),
          },
          icon: {
            default: select('Icon', options.icon, options.icon.none),
          },
          fluid: {
            default: boolean('Fluid', options.fluid),
          },
          text: {
            default: text('Slot default', options.text),
          },
        },
        template: `<dd-button :icon="icon" :type="type" :size="size"
        :fluid="fluid"
        >{{text}}</dd-button>`,
      }),
      {
        info: {
          summary: 'Default button',
        },
      },
    );
