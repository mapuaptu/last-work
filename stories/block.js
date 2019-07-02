import { storiesOf } from '@storybook/vue';
import { Block } from '../src/index';

export default () =>
  storiesOf('Block', module).add('Default', () => ({
    components: { 'dd-block': Block },
    template: '<dd-block>block content</dd-block>',
  }));
