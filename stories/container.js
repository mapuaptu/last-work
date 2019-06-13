import { storiesOf } from '@storybook/vue';
import { Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Container', module)
    .add('default', () => ({
      components: { 'ui-container': Container, 'ui-row': Row, 'ui-col': Col },
      template: `<ui-container>
        <ui-row style="background-color: red;">
          <ui-col size="5" offset="1" order="2" style="background-color: green;">col 1</ui-col>
          <ui-col size="6" offset="2" style="background-color: blue;">col 2</ui-col>
        </ui-row>
      </ui-container>`,
    }))
    .add('fluid', () => ({
      components: { 'ui-container': Container },
      template: '<ui-container fluid>Container</ui-container>',
    }));
