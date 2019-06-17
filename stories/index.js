import ButtonStory from './button';
import CheckboxStory from './checkbox';
import InputStory from './input';
import GridStory from './grid';
import TypographyStory from './typography';
import LogoStory from './logo';

const stories = {
  ButtonStory,
  CheckboxStory,
  InputStory,
  GridStory,
  LogoStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
