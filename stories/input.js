import { storiesOf } from '@storybook/vue';
import { Input, Container, Row, Col, FormField } from '../src/index';

export default () =>
  storiesOf('Input', module)
    .add('default', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-form-field': FormField,
      },
      data() {
        return {
          model: 'Example text field',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field>
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
        <dd-row>
          <dd-col>{{model}}</dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('empty', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-form-field': FormField,
      },
      data() {
        return {
          model: '',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field>
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
        <dd-row>
          <dd-col>{{model}}</dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('disabled', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-form-field': FormField,
      },
      data() {
        return {
          model: '',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field>
            <dd-input
              placeholder="Example placeholder"
              v-model="model" disabled>
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
        <dd-row>
          <dd-col>{{model}}</dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('success', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-form-field': FormField,
      },
      data() {
        return {
          model: 'Example text field',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field status="success">
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
        <dd-row>
          <dd-col>{{model}}</dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('error', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
        'dd-form-field': FormField,
      },
      data() {
        return {
          model: 'Example text field',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field status="error">
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
        <dd-row>
          <dd-col>{{model}}</dd-col>
        </dd-row>
      </dd-container>`,
    }));
