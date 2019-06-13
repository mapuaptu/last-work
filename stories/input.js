import { storiesOf } from '@storybook/vue';
import { Input } from '../src/index';

export default () =>
  storiesOf('Input', module)
    .add('default', () => ({
      components: {
        'dd-input': Input,
      },
      template:
        '<dd-input placeholder="Example placeholder" value="Example text field"></dd-input>',
    }))
    .add('empty', () => ({
      components: {
        'dd-input': Input,
      },
      template: '<dd-input placeholder="Example placeholder"></dd-input>',
    }))
    .add('disabled', () => ({
      components: {
        'dd-input': Input,
      },
      template: '<dd-input value="Example text field" disabled></dd-input>',
    }));
