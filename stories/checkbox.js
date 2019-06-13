import { storiesOf } from '@storybook/vue';
import { Checkbox } from '../src/index';

export default () =>
  storiesOf('Checkbox', module).add('default', () => ({
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
  }));
