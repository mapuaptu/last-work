import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button, Container, Row, Col } from '../src/index';

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
    )
    .add(
      'size="small"',
      () => ({
        components: { 'dd-button': Button },
        template: '<dd-button size="small">ADD NEW TASK</dd-button>',
      }),
      {
        info: {
          summary: 'Summary for MyComponent',
        },
      },
    )
    .add('size="large"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button size="large">ADD NEW TASK</dd-button>',
    }))
    .add('type="primary"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button type="primary">ADD NEW TASK</dd-button>',
    }))
    .add('type="secondary"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button type="secondary">ADD NEW TASK</dd-button>',
    }))
    .add('icon="circle"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button icon="circle">ADD NEW TASK</dd-button>',
    }))
    .add(':fluid="false"', () => ({
      components: {
        'dd-button': Button,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
      template: '<dd-button icon="circle">ADD NEW TASK</dd-button>',
    }))
    .add(':fluid="true"', () => ({
      components: {
        'dd-button': Button,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
      template: `<dd-container>
        <dd-row>
          <dd-col size="12">
          <dd-button fluid icon="circle">ADD NEW TASK</dd-button>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
