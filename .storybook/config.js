import { configure, addParameters, addDecorator } from '@storybook/vue';
import centered from '@storybook/addon-centered/vue';
import { withInfo } from 'storybook-addon-vue-info';
import theme from './dashdojoTheme';
import '!style-loader!css-loader!sass-loader!./../src/styles/common.scss';

centered().data().innerStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '50%',
  marginLeft: 'auto',
  marginRight: 'auto',
};
addDecorator(centered, withInfo);

addParameters({
  options: {
    theme,
  },
});

function loadStories() {
  require('../src/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
