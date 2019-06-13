import { storiesOf } from '@storybook/vue';
import { Checkbox } from '../src/index';

export default () =>
  storiesOf('Checkbox', module)
    .add('default', () => ({
      components: { 'ui-checkbox': Checkbox },
      template: '<ui-checkbox :value="checked" @input="onInput"></ui-checkbox>',
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
      components: { 'ui-checkbox': Checkbox },
      template: '<ui-checkbox :value="checked" @input="onInput"></ui-checkbox>',
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
      components: { 'ui-checkbox': Checkbox },
      template: '<ui-checkbox :value="checked" @input="onInput">Checkbox with text</ui-checkbox>',
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
      components: { 'ui-checkbox': Checkbox },
      template:
        '<ui-checkbox disabled :value="checked" @input="onInput">Checkbox with text</ui-checkbox>',
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
