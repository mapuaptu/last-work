import { storiesOf } from '@storybook/vue';
import { Radio, Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Radio', module).add('default', () => ({
    components: {
      'dd-container': Container,
      'dd-row': Row,
      'dd-col': Col,
      'dd-radio': Radio,
    },
    template: `<dd-container>
      <dd-row>
        <dd-col>
          <dd-raido></dd-radio>
        </dd-col>
      </dd-row>
    </dd-container>`,
  }));
