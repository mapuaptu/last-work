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

storiesOf('Container', module)
  .add('default', () => ({
    components: { 'ui-container': Container },
    template: '<ui-container>Container</ui-container>',
  }))
  .add('fluid', () => ({
    components: { 'ui-container': Container },
    template: '<ui-container fluid>Container</ui-container>',
  }));

storiesOf('Headings', module)
  .add('H1', () => ({
    template: '<h1>Lorem ipsum dolor sit amet</h1>',
  }))
  .add('H2', () => ({
    template: '<h2>Lorem ipsum dolor sit amet</h2>',
  }))
  .add('H3', () => ({
    template: '<h3>Lorem ipsum dolor sit amet</h3>',
  }));

storiesOf('Text paragraph', module).add('default', () => ({
  template:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
}));

storiesOf('Text', module)
  .add('default', () => ({
    template:
      '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
  }))
  .add('small', () => ({
    template: '<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>',
  }));
