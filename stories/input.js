import { storiesOf } from '@storybook/vue';
import { Input, Container, Row, Col } from '../src/index';

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
    }));
