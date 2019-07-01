import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { Userpic } from '../src/index';

const options = {
  url: `https://gravatar.com/avatar/
              e40f37c3d4d4cff5a87dd7d476af3fb4?s=200&d=retro&r=x`,
  alt: 'Alt text',
  size: 33,
};

export default () =>
  storiesOf('Userpic', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        props: {
          url: {
            default: text('Url', options.url),
          },
          alt: {
            default: text('Alt', options.alt),
          },
          size: {
            default: number('Size', options.size),
          },
        },
        components: { 'dd-userpic': Userpic },
        template: `<dd-userpic :url="url" :alt="alt" :size="size">
        </dd-userpic>`,
      }),
      {
        info: {
          summary: 'Default userpic',
        },
      },
    );
