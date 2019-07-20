import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { Card, CardItem } from '../index';

export default () =>
  storiesOf('Card', module)
    .addDecorator(withInfo)
    .add(
      'Default',
      () => ({
        components: { 'dd-card': Card, 'dd-card-item': CardItem },
        props: {},
        data() {
          return {
            list: [
              { name: 'Dojos', count: '+59', status: 'success' },
              { name: 'Projects', count: '+96', status: 'success' },
              { name: 'Tasks', count: '-599', status: 'error' },
              { name: 'Users', count: '+256', status: 'success' },
            ],
          };
        },
        template: `<dd-card>
          <template #title>Last 30 Days</template>
            <dd-card-item v-for="item in list" :key="item.name"
            :color="item.status">
              <template #name>
                {{item.name}}
              </template>
              <template #value>
                {{item.count}}
              </template>
            </dd-card-item>
        </dd-card>`,
      }),
      {
        info: {
          summary: 'Default card',
        },
      },
    );
