import { configure } from '@storybook/vue';
import '../src/styles/_reset.scss';
import '../src/styles/_globals.scss';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
