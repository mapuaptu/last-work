import { storiesOf } from '@storybook/vue';
import { Checkbox } from '../src/index';

export default () =>
  storiesOf('Checkbox', module)
    .add('default', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: '<dd-checkbox v-model="checked">{{checked}}</dd-checkbox>',
      data() {
        return {
          checked: false,
        };
      },
    }))
    .add('checked', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: '<dd-checkbox v-model="checked">{{checked}}</dd-checkbox>',
      data() {
        return {
          checked: true,
        };
      },
    }))
    .add('with text', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: `<dd-checkbox v-model="checked">
        Checkbox with text</dd-checkbox>`,
      data() {
        return {
          checked: false,
        };
      },
    }))
    .add('disabled', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: `<dd-checkbox disabled v-model="checked">
        Checkbox with text</dd-checkbox>`,
      data() {
        return {
          checked: true,
        };
      },
    }));
