import ButtonStory from './button';
import InputStory from './input';
import GridStory from './grid';
import TypographyStory from './typography';
import CheckboxStory from './checkbox';
import LogoStory from './logo';

const stories = {
  ButtonStory,
  InputStory,
  GridStory,
  CheckboxStory,
  LogoStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
