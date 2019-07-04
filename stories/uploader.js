import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Uploader, Userpic } from '../src/index';

const options = {
  text: 'Upload new',
};

export default () =>
  storiesOf('Uploader', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { 'dd-uploader': Uploader, 'dd-userpic': Userpic },
        props: {
          text: {
            default: text('Default slot', options.text),
          },
        },
        data() {
          return {
            url: `https://gravatar.com/avatar/
              e40f37c3d4d4cff5a87dd7d476af3fb4?s=200&d=retro&r=x`,
            alt: 'Alt text',
            size: 117,
          };
        },
        template: `<dd-uploader>
        <template #image>
          <dd-userpic :url="url" :size="size"></dd-userpic>
        </template>
        {{text}}
        </dd-uploader>`,
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
