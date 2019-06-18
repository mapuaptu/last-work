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
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
            <dd-input
              placeholder="Example placeholder"
              value="Example text field">
            </dd-input>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('empty', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
            <dd-input placeholder="Example placeholder">
            </dd-input>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('disabled', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
            <dd-input
              placeholder="Example placeholder"
              disabled
              value="Example text field">
            </dd-input>
          </dd-col>
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
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field status="success">
            <dd-input
              placeholder="Example placeholder"
              value="Example text field">
            </dd-input>
          </dd-form-field>
          </dd-col>
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
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field status="error">
            <dd-input
              placeholder="Example placeholder"
              value="Example text field">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
