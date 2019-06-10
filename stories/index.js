import { storiesOf } from '@storybook/vue';
import Button from '../src/components/button/button.vue';

storiesOf('Button', module).add('size - default', () => ({
  components: { 'ui-button': Button },
  template: '<ui-button>ADD NEW TASK</ui-button>',
}));
