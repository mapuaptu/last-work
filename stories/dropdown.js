import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Dropdown, DropdownItem } from '../src/index';

const options = {
  value: false,
};

export default () =>
  storiesOf('Dropdown', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'default',
      () => ({
        components: {
          'dd-dropdown': Dropdown,
          'dd-dropdown-item': DropdownItem,
        },
        data() {
          return {
            open: false,
            menu: [
              {
                title: 'Archive',
              },
              {
                title: 'Rename',
              },
              {
                title: 'Delete',
              },
            ],
          };
        },
        template: `<dd-dropdown v-model="open">
        <dd-dropdown-item v-for="(item, index) in menu" :key="index">
          {{item.title}}
        </dd-dropdown-item>
      </dd-dropdown>`,
      }),
      {
        info: {
          summary: 'Default dropdown',
        },
      },
    );
