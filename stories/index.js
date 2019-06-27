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
import SwitchStory from './switch';
import ModalStory from './modal';
import UserpicStory from './userpic';

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
  SwitchStory,
  ModalStory,
  UserpicStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
