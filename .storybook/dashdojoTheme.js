import { create } from '@storybook/theming';
import { version } from './../package.json'

export default create({
  base: 'light',
  brandTitle: `UI Components v.${version}`,
});
