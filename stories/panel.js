import { storiesOf } from '@storybook/vue';
import { Panel } from '../src/index';

export default () =>
  storiesOf('Panel', module).add('default', () => ({
    components: {
      'dd-panel': Panel,
    },
    template: '<dd-panel>panel content</dd-panel>',
  }));
