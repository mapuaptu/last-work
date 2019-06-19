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
          model: 'Example text field',
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
            <template #label>Label example</template>
            <template #message>Helper text for example</template>
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
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
      data() {
        return {
          model: 'Example text field',
        };
      },
      template: `<dd-container>
        <dd-row>
          <dd-col>
          <dd-form-field status="error">
            <template #label>Label example</template>
            <template #message>Helper text for example</template>
            <dd-input
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('size="small"', () => ({
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
              size="small"
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('size="medium"', () => ({
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
              size="medium"
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('size="large"', () => ({
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
              size="large"
              placeholder="Example placeholder"
              v-model="model">
            </dd-input>
          </dd-form-field>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
