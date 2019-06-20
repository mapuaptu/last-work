import ButtonStory from './button';
import CheckboxStory from './checkbox';
import GridStory from './grid';
import InputStory from './input';
import LogoStory from './logo';
import DropdownStory from './dropdown';
import TypographyStory from './typography';
import RadioStory from './radio';
import PanelStory from './panel';

const stories = {
  ButtonStory,
  CheckboxStory,
  GridStory,
  InputStory,
  LogoStory,
  DropdownStory,
  RadioStory,
  PanelStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
