import { storiesOf } from '@storybook/vue';
import { Button, Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Button', module)
    .add('size="default"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button size="default">ADD NEW TASK</dd-button>',
    }))
    .add('size="small"', () => ({
      components: { 'dd-button': Button },
      template: '<dd-button size="small">ADD NEW TASK</dd-button>',
    }))
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
    .add(':fluid="true"', () => ({
      components: { 'dd-button': Button, 'dd-container': Container, 'dd-row': Row, 'dd-col': Col },
      template: `<dd-container>
        <dd-row>
          <dd-col size="12">
          <dd-button fluid icon="circle">ADD NEW TASK</dd-button>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
