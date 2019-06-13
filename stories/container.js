import { storiesOf } from '@storybook/vue';
import { Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Container', module)
    .add('default', () => ({
      components: { 'ui-container': Container, 'ui-row': Row, 'ui-col': Col },
      template: `<ui-container>
        <ui-row gutter="60" style="background-color: red;">
          <ui-col size="5" offset="1" order="2" justify="center" align="center" style="background-color: green;"><span>1</span><span style="height: 100px; background-color: yellow;">2</span></ui-col>
          <ui-col size="6" offset="2" self="center" style="background-color: blue;">col 2</ui-col>
        </ui-row>
      </ui-container>`,
    }))
    .add('fluid', () => ({
      components: { 'ui-container': Container },
      template: '<ui-container fluid>Container</ui-container>',
    }));
