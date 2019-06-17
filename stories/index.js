import ButtonStory from './button';
import CheckboxStory from './checkbox';
import GridStory from './grid';
import InputStory from './input';
import LogoStory from './logo';
import TypographyStory from './typography';

const stories = {
  ButtonStory,
  CheckboxStory,
  GridStory,
  InputStory,
  LogoStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
