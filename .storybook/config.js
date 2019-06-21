import { configure, addParameters, addDecorator } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import { withInfo } from 'storybook-addon-vue-info';
import theme from './dashdojoTheme';
import '../src/styles/common.scss';

addDecorator(centered, withInfo);

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
