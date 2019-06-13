import { storiesOf } from '@storybook/vue';
import { Input } from '../src/index';

export default () =>
  storiesOf('Input', module).add('default', () => ({
    components: {
      'ui-input': Input,
    },
    template: '<ui-input></ui-input>',
  }));
