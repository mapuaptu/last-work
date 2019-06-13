import InputStory from './input';
import ButtonStory from './button';
import GridStory from './grid';
import TypographyStory from './typography';
import CheckboxStory from './checkbox';

const stories = {
  InputStory,
  ButtonStory,
  GridStory,
  CheckboxStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => story());
