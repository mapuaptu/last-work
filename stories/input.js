import { storiesOf } from '@storybook/vue';
import { Input, Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Input', module)
    .add('default', () => ({
      components: {
        'dd-input': Input,
      },
      template: `<dd-input
        placeholder="Example placeholder"
        value="Example text field">
        </dd-input>`,
    }))
    .add('empty', () => ({
      components: {
        'dd-input': Input,
      },
      template: '<dd-input placeholder="Example placeholder"></dd-input>',
    }))
    .add('disabled', () => ({
      components: {
        'dd-input': Input,
      },
      template: '<dd-input value="Example text field" disabled></dd-input>',
    }))
    .add('fluid', () => ({
      components: {
        'dd-input': Input,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
      template: `<dd-container>
        <dd-row>
          <dd-col size="12">
            <dd-input fluid value="Example text field" disabled></dd-input>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
