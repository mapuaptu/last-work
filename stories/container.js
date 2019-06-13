import { storiesOf } from '@storybook/vue';
import { Container } from '../src/index';

export default () =>
  storiesOf('Container', module)
    .add('default', () => ({
      components: { 'ui-container': Container, 'ui-row': Row, 'ui-col': Col },
      template:
        '<ui-container><ui-row><ui-col margin="right">some content</ui-col></ui-row></ui-container>',
    }))
    .add('fluid', () => ({
      components: { 'ui-container': Container },
      template: '<ui-container fluid>Container</ui-container>',
    }));
