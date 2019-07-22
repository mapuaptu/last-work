import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { Datepicker, Input } from '../index';

export default () =>
  storiesOf('Datepicker', module)
    .addDecorator(withInfo)
    .add(
      'Default',
      () => ({
        components: { [Datepicker.name]: Datepicker, [Input.name]: Input },
        props: {},
        data() {
          return {
            date: new Date(),
          };
        },
        template: `<dd-datepicker :value="date" @input="onInput">
        </dd-datepicker>`,
        methods: {
          onInput(value) {
            this.date = value;
            action('input')(value);
          },
        },
      }),
      {
        info: {
          summary: 'Default datepicker',
        },
      },
    );
