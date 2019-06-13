import { storiesOf } from '@storybook/vue';
import { Button, Container, Row, Col } from '../src/index';

import InputStory from './input';
import ButtonStory from './button';

InputStory();
ButtonStory();

storiesOf('Container', module)
  .add('default', () => ({
    components: { 'ui-container': Container, 'ui-row': Row, 'ui-col': Col },
    template:
      '<ui-container><ui-row><ui-col margin="right">some content</ui-col></ui-row></ui-container>',
  }))
  .add('fluid', () => ({
    components: { 'ui-container': Container },
    template: '<ui-container fluid>Container</ui-container>',
  }));

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

storiesOf('Text paragraph', module).add('default', () => ({
  template:
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>',
}));

storiesOf('Text', module)
  .add('default', () => ({
    template:
      '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>',
  }))
  .add('small', () => ({
    template: '<small>Lorem ipsum dolor sit amet, consectetur adipiscing elit</small>',
  }));
