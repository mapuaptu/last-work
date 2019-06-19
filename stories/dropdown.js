import { storiesOf } from '@storybook/vue';
import { Dropdown, DropdownItem, Container, Row, Col } from '../src/index';

export default () =>
  storiesOf('Dropdown', module)
    .add('default', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container style="padding-top: 150px;">
        <dd-row>
          <dd-col size="12" justify="center">
            <dd-dropdown v-model="open">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('icon', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
      },
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index"
              :icon="item.icon">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="bottom-right"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="bottom-left"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="bottom-left">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="right-bottom"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="right-bottom">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="right-top"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="right-top">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="top-right"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="top-right">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="top-left"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="top-left">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="left-top"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="left-top">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }))
    .add('position="left-bottom"', () => ({
      components: {
        'dd-dropdown': Dropdown,
        'dd-dropdown-item': DropdownItem,
        'dd-container': Container,
        'dd-row': Row,
        'dd-col': Col,
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
      template: `<dd-container>
        <dd-row>
          <dd-col size="12" justify="center" style="padding-top: 150px;">
            <dd-dropdown v-model="open" position="left-bottom">
              <dd-dropdown-item v-for="(item, index) in menu" :key="index">
                {{item.title}}
              </dd-dropdown-item>
            </dd-dropdown>
          </dd-col>
        </dd-row>
      </dd-container>`,
    }));
