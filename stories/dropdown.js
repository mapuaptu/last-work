import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Dropdown, DropdownItem } from '../src/index';

const options = {
  icon: 'ellipsis-h',
  position: {
    bottomRight: 'bottom-right',
    bottomLeft: 'bottom-left',
    rightTop: 'right-top',
    rightBottom: 'right-bottom',
    topRight: 'top-right',
    topLeft: 'top-left',
    leftTop: 'left-top',
    leftBotton: 'left-bottom',
  },
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
                disabled: true,
              },
            ],
          };
        },
        props: {
          icon: {
            default: text('Icon', options.icon),
          },
          position: {
            default: select(
              'Position',
              options.position,
              options.position.bottomRight,
            ),
          },
        },
        template: `<dd-dropdown v-model="open" :icon="icon" :position="position"
        @input="onInput">
          <dd-dropdown-item v-for="(item, index) in menu" :key="index"
          :disabled="item.disabled">
            {{item.title}}
          </dd-dropdown-item>
      </dd-dropdown>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default dropdown',
        },
      },
    );
