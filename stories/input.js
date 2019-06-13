import { storiesOf } from '@storybook/vue';
import { Input } from '../src/index';

export default () =>
  storiesOf('Input', module)
    .add('default', () => ({
      components: {
        'ui-input': Input,
      },
      template:
        '<ui-input placeholder="Example placeholder" value="Example text field"></ui-input>',
    }))
    .add('empty', () => ({
      components: {
        'ui-input': Input,
      },
      template: '<ui-input placeholder="Example placeholder"></ui-input>',
    }));
