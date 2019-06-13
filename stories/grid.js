import { storiesOf } from '@storybook/vue';
import { Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Grid system', module).add('default', () => ({
    components: { 'ui-container': Container, 'ui-row': Row, 'ui-col': Col },
    template: `<ui-container>
        <ui-row gutter="60" style="background-color: #ff9184;">
          gutter="60"
          <ui-col size="5" offset="1" order="2" justify="center" align="center" style="background-color: #ceedb6;">size="5" offset="1" order="2" justify="center" align="center"<span style="background-color: #617c92">one</span><span style="height: 100px; background-color: #ffe284;">two</span></ui-col>
          <ui-col size="6" offset="2" self="center" style="background-color: #84d9ff;">size="6" offset="2" self="center"</ui-col>
        </ui-row>
      </ui-container>`,
  }));
