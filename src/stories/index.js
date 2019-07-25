import BlockStory from './block';
import ButtonStory from './button';
import CardStory from './card';
import CheckboxStory from './checkbox';
import Datepicker from './datepicker';
import DropdownStory from './dropdown';
import GridStory from './grid';
import IconStory from './icon';
import InputSplitStory from './input-split';
import InputStory from './input';
import LogoStory from './logo';
import MenuStory from './menu';
import NotificationStory from './notification';
import RadioStory from './radio';
import SelectStory from './select';
import Spinner from './spinner';
import SwitchStory from './switch';
import TypographyStory from './typography';
import Uploader from './uploader';
import UserpicStory from './userpic';

const stories = {
  BlockStory,
  ButtonStory,
  CardStory,
  CheckboxStory,
  Datepicker,
  DropdownStory,
  GridStory,
  IconStory,
  InputSplitStory,
  InputStory,
  LogoStory,
  MenuStory,
  NotificationStory,
  RadioStory,
  SelectStory,
  Spinner,
  SwitchStory,
  ...TypographyStory,
  Uploader,
  UserpicStory,
};

Object.values(stories).map((story) => story());
