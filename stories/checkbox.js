import { storiesOf } from '@storybook/vue';
import { Checkbox } from '../src/index';

export default () =>
  storiesOf('Checkbox', module)
    .add('default', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: '<dd-checkbox :value="checked" @input="onInput"></dd-checkbox>',
      data() {
        return {
          checked: false,
        };
      },
      methods: {
        onInput() {
          this.checked = !this.checked;
        },
      },
    }))
    .add('checked', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: '<dd-checkbox :value="checked" @input="onInput"></dd-checkbox>',
      data() {
        return {
          checked: true,
        };
      },
      methods: {
        onInput() {
          this.checked = !this.checked;
        },
      },
    }))
    .add('with text', () => ({
      components: { 'dd-checkbox': Checkbox },
      template: '<dd-checkbox :value="checked" @input="onInput">Checkbox with text</dd-checkbox>',
      data() {
        return {
          checked: false,
        };
      },
      methods: {
        onInput() {
          this.checked = !this.checked;
        },
      },
    }))
    .add('disabled', () => ({
      components: { 'dd-checkbox': Checkbox },
      template:
        '<dd-checkbox disabled :value="checked" @input="onInput">Checkbox with text</dd-checkbox>',
      data() {
        return {
          checked: true,
        };
      },
      methods: {
        onInput() {
          this.checked = !this.checked;
        },
      },
    }));
