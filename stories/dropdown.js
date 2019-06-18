import { storiesOf } from '@storybook/vue';
import { Dropdown } from '../src/index';

export default () =>
  storiesOf('Dropdown', module).add('default', () => ({
    components: { 'dd-dropdown': Dropdown },
    data() {
      return {
        open: false,
      };
    },
    template: '<dd-dropdown v-model="open"></dd-dropdown>',
  }));
