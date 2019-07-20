import ButtonStory from './button';
import BlockStory from './block';
import CardStory from './card';
import CheckboxStory from './checkbox';
import GridStory from './grid';
import InputStory from './input';
import InputSplitStory from './input-split';
import IconStory from './icon';
import LogoStory from './logo';
import DropdownStory from './dropdown';
import TypographyStory from './typography';
import RadioStory from './radio';
import SelectStory from './select';
import SwitchStory from './switch';
import UserpicStory from './userpic';
import NotificationStory from './notification';
import Uploader from './uploader';
import Spinner from './spinner';

const stories = {
  ButtonStory,
  BlockStory,
  CardStory,
  CheckboxStory,
  GridStory,
  InputStory,
  InputSplitStory,
  IconStory,
  LogoStory,
  DropdownStory,
  RadioStory,
  SelectStory,
  SwitchStory,
  UserpicStory,
  NotificationStory,
  Uploader,
  Spinner,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
