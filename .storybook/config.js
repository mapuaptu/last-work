import { configure, addParameters, addDecorator } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import { configureActions } from '@storybook/addon-actions';
import theme from './dashdojoTheme';
import '../src/styles/common.scss';

configureActions({
  depth: 100,
  limit: 20,
});

addDecorator(centered);

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
