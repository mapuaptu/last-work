import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';
import { Userpic } from '../index';

const options = {
  url: {
    default: '',
    current: 'https://i.pravatar.cc/140',
  },
  alt: 'Alt text',
  size: 140,
};

export default () =>
  storiesOf('Userpic', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { [Userpic.name]: Userpic },
        props: {
          url: {
            default: select('Url', options.url, options.default),
          },
          alt: {
            default: text('Alt', options.alt),
          },
          size: {
            default: number('Size', options.size),
          },
        },
        template: `<dd-userpic :url="url" :alt="alt" :size="size">
        </dd-userpic>`,
      }),
      {
        info: {
          summary: 'Default userpic',
        },
      },
    );
