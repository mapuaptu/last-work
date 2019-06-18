import { storiesOf } from '@storybook/vue';
import { Dropdown, DropdownItem } from '../src/index';

export default () =>
  storiesOf('Dropdown', module)
    .add('default', () => ({
      components: { 'dd-dropdown': Dropdown, 'dd-dropdown-item': DropdownItem },
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
    }))
    .add('icon', () => ({
      components: { 'dd-dropdown': Dropdown, 'dd-dropdown-item': DropdownItem },
      data() {
        return {
          open: false,
          menu: [
            {
              title: 'Archive',
              icon: 'archive',
            },
            {
              title: 'Rename',
              icon: 'pen',
            },
            {
              title: 'Delete',
              icon: 'trash',
            },
          ],
        };
      },
      template: `<dd-dropdown v-model="open">
      <dd-dropdown-item v-for="(item, index) in menu" :key="index"
        :icon="item.icon">
        {{item.title}}
      </dd-dropdown-item>
    </dd-dropdown>`,
    }))
    .add('position="bottom-left"', () => ({
      components: { 'dd-dropdown': Dropdown, 'dd-dropdown-item': DropdownItem },
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
      template: `<div style="display: flex; justify-content: flex-end;">
      <dd-dropdown v-model="open" position="bottom-left">
        <dd-dropdown-item v-for="(item, index) in menu" :key="index">
          {{item.title}}
        </dd-dropdown-item>
      </dd-dropdown>
    </div>`,
    }));
