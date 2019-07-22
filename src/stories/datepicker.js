import { storiesOf } from '@storybook/vue';
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
        template: '<dd-datepicker>datepicker</dd-datepicker>',
      }),
      {
        info: {
          summary: 'Default datepicker',
        },
      },
    );
