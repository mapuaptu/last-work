import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Uploader, Userpic, Button } from '../src/index';

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
        components: {
          'dd-uploader': Uploader,
          'dd-userpic': Userpic,
          'dd-button': Button,
        },
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
            size: 140,
          };
        },
        template: `<dd-uploader @delete="onDelete" @input="onInput">
        <template #image>
          <dd-userpic :url="url" :size="size"></dd-userpic>
        </template>
        <dd-button size="small">Upload new</dd-button>
        </dd-uploader>`,
        methods: {
          onDelete() {
            action('delete')();
            this.url = '';
          },
          onInput(baseURL) {
            action('input')(baseURL);
            this.url = baseURL;
          },
        },
      }),
      {
        info: {
          summary: 'Default switch',
        },
      },
    );
