import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Select, Userpic } from '../index';

const options = {
  placeholder: 'Please select country',
  disabled: false,
};

export default () =>
  storiesOf('Select', module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
      'Default',
      () => ({
        components: { [Select.name]: Select },
        data() {
          return {
            value: '',
            countries: [
              'Afghanistan',
              'Albania',
              'Algeria',
              'American Samoa',
              'Andorra',
            ],
          };
        },
        props: {
          placeholder: {
            default: text('Placeholder', options.placeholder),
          },
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
        },
        template: `<dd-select v-model="value" :options="countries"
          :disabled="disabled" :placeholder="placeholder" @input="onInput">
          </dd-select>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default select',
        },
      },
    )
    .add(
      'Default with object',
      () => ({
        components: { 'dd-select': Select, 'dd-userpic': Userpic },
        data() {
          return {
            value: {
              id: 1,
              label: 'Afghanistan',
              image: 'https://i.pravatar.cc/24',
            },
            options: [
              {
                id: 1,
                label: 'Afghanistan',
                image: 'https://i.pravatar.cc/24',
              },
              { id: 2, label: 'Albania', image: 'https://i.pravatar.cc/24' },
              { id: 3, label: 'Algeria', image: 'https://i.pravatar.cc/24' },
              {
                id: 4,
                label: 'American Samoa',
                image: 'https://i.pravatar.cc/24',
              },
              { id: 5, label: 'Andorra', image: 'https://i.pravatar.cc/24' },
            ],
          };
        },
        props: {
          placeholder: {
            default: text('Placeholder', options.placeholder),
          },
          disabled: {
            default: boolean('Disabled', options.disabled),
          },
        },
        template: `<dd-select v-model="value" :options="options"
          :disabled="disabled" :placeholder="placeholder" track-by="id"
          @input="onInput">
            <template #option="{option}">
              <dd-userpic :url="option.image" :size="35" class="mr-3">
              </dd-userpic>
              {{option.label}}
            </template>
            <template #singleLabel="{option}">
              <dd-userpic :url="option.image" :size="35" class="mr-3">
              </dd-userpic>
              {{option.label}}
            </template>
          </dd-select>`,
        methods: {
          onInput: action('input'),
        },
      }),
      {
        info: {
          summary: 'Default select',
        },
      },
    );
