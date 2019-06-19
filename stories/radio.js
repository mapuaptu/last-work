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
    data() {
      return {
        current: '',
      };
    },
    template: `<dd-container>
      <dd-row>
        <dd-col>
          <dd-radio v-model="current" label="Radio with text">
          </dd-radio>
          <dd-radio v-model="current" label="Radio with text 2">
          </dd-radio>
        </dd-col>
      </dd-row>
      <dd-row>
        <dd-col>{{current}}</dd-col>
      </dd-row>
    </dd-container>`,
  }));
