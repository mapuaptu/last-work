import InputStory from './input';
import ButtonStory from './button';
import GridStory from './grid';
import TypographyStory from './typography';
import CheckboxStory from './checkbox';
import LogoStory from './logo';

const stories = {
  InputStory,
  ButtonStory,
  GridStory,
  CheckboxStory,
  LogoStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
