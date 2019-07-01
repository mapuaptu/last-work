import { storiesOf } from '@storybook/vue';

const Headings = () =>
  storiesOf('Headings', module)
    .add('H1', () => ({
      template: '<h1>Lorem ipsum dolor sit amet</h1>',
    }))
    .add('H2', () => ({
      template: '<h2>Lorem ipsum dolor sit amet</h2>',
    }))
    .add('H3', () => ({
      template: '<h3>Lorem ipsum dolor sit amet</h3>',
    }));

const Paragraph = () =>
  storiesOf('Paragraph', module).add('default', () => ({
    template: `<p style="max-width: 500px">Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. </p>`,
  }));

const Text = () =>
  storiesOf('Text', module).add('default', () => ({
    template: `<div style="max-width: 500px">Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.</div>`,
  }));

export default { Headings, Paragraph, Text };
