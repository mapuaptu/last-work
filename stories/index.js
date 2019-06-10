import { storiesOf } from '@storybook/vue';
import Button from '../src/components/button/button.vue';

storiesOf('Button', module).add('default', () => ({
  components: { 'ui-button': Button },
  template: '<ui-button>rounded 1234</ui-button>',
}));
