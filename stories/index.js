import ButtonStory from './button';
import CheckboxStory from './checkbox';
import GridStory from './grid';
import InputStory from './input';
import IconStory from './icon';
import LogoStory from './logo';
import DropdownStory from './dropdown';
import TypographyStory from './typography';
import RadioStory from './radio';
import SelectStory from './select';
import SwitchStory from './switch';
import UserpicStory from './userpic';
import BlockStory from './block';
import CardStory from './card';
import NotificationStory from './notification';
import Uploader from './uploader';
import Progressbar from './progressbar';
import Spinner from './spinner';

const stories = {
  ButtonStory,
  CheckboxStory,
  GridStory,
  InputStory,
  IconStory,
  LogoStory,
  DropdownStory,
  RadioStory,
  SelectStory,
  SwitchStory,
  UserpicStory,
  BlockStory,
  CardStory,
  NotificationStory,
  Uploader,
  Progressbar,
  Spinner,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
