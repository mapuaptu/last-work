import { storiesOf } from '@storybook/vue';
import Button from '../src/packages/button/src/button.vue';
import Container from '../src/packages/container/src/container.vue';

storiesOf('Button', module)
  .add('size="default"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button size="default">ADD NEW TASK</ui-button>',
  }))
  .add('size="small"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button size="small">ADD NEW TASK</ui-button>',
  }))
  .add('size="large"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button size="large">ADD NEW TASK</ui-button>',
  }))
  .add('type="primary"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button type="primary">ADD NEW TASK</ui-button>',
  }))
  .add('type="secondary"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button type="secondary">ADD NEW TASK</ui-button>',
  }))
  .add('icon="circle"', () => ({
    components: { 'ui-button': Button },
    template: '<ui-button icon="circle">ADD NEW TASK</ui-button>',
  }));

storiesOf('Container', module).add('container', () => ({
  components: { 'ui-container': Container },
  template: '<ui-container size="default">Container</ui-container>',
}));
