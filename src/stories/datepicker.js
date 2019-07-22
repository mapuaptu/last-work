import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { Datepicker } from '../index';

export default () =>
  storiesOf('Datepicker', module)
    .addDecorator(withInfo)
    .add(
      'Default',
      () => ({
        components: { [Datepicker.name]: Datepicker },
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
            console.log(value);
          },
        },
      }),
      {
        info: {
          summary: 'Default datepicker',
        },
      },
    );
