import ButtonStory from './button';
import CheckboxStory from './checkbox';
import GridStory from './grid';
import InputStory from './input';
import IconStory from './icon';
import LogoStory from './logo';
import DropdownStory from './dropdown';
import TypographyStory from './typography';
import RadioStory from './radio';
import PanelStory from './panel';
import SelectStory from './select';
import Switch from './switch';

const stories = {
  ButtonStory,
  CheckboxStory,
  GridStory,
  InputStory,
  IconStory,
  LogoStory,
  DropdownStory,
  RadioStory,
  PanelStory,
  SelectStory,
  Switch,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
