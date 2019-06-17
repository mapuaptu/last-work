import { configure, addParameters } from '@storybook/vue';
import theme from './dashdojoTheme';
import '../src/styles/common.scss';

addParameters({
  options: {
    theme,
  },
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
