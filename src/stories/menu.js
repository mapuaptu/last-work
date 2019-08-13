import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Menu } from '../index';

export default () =>
  storiesOf('Menu', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          [Menu.name]: Menu,
        },
        template: `<dd-menu>
          <a href="/" @click.prevent>Menu item 1</a>
          <a href="/" @click.prevent>Menu item 2</a>
          <a class="router-link-active" href="/" @click.prevent>Menu item 3</a>
        </dd-menu>`,
      }),
      {
        info: {
          summary: 'Default menu',
        },
      },
    );
