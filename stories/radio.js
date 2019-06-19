import { storiesOf } from '@storybook/vue';
import { Radio, Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Radio', module)
    .add('default ', () => ({
      components: {
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-radio': Radio,
      },
      data() {
        return {
          radio: '',
        };
      },
      template: `<dd-container>
      <dd-row>
        <dd-col>
          <dd-radio v-model="radio">
          </dd-radio>
        </dd-col>
      </dd-row>
    </dd-container>`,
    }))
    .add('cheched', () => ({
      components: {
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-radio': Radio,
      },
      data() {
        return {
          radio: '',
        };
      },
      template: `<dd-container>
      <dd-row>
        <dd-col>
          <dd-radio v-model="radio" label="">
          </dd-radio>
        </dd-col>
      </dd-row>
    </dd-container>`,
    }))
    .add('with label', () => ({
      components: {
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-radio': Radio,
      },
      data() {
        return {
          radio: 'label1',
        };
      },
      template: `<dd-container>
      <dd-row>
        <dd-col size="1">
          <dd-radio v-model="radio" label="label1">
          </dd-radio>
        </dd-col>
        <dd-col size="1">
          <dd-radio v-model="radio" label="label2">
          </dd-radio>
        </dd-col>
      </dd-row>
      <dd-row>
        <dd-col>
          {{radio}}
        </dd-col>
      </dd-row>
    </dd-container>`,
    }))
    .add('disabled', () => ({
      components: {
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-radio': Radio,
      },
      data() {
        return {
          radio: '2',
        };
      },
      template: `<dd-container>
      <dd-row>
        <dd-col size="1">
          <dd-radio v-model="radio" label="1" disabled>
          </dd-radio>
        </dd-col>
        <dd-col size="1">
          <dd-radio v-model="radio" label="2" disabled>
          </dd-radio>
        </dd-col>
      </dd-row>
    </dd-container>`,
    }));
