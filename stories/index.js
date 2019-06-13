import InputStory from './input';
import ButtonStory from './button';
import ContainerStory from './container';
import TypographyStory from './typography';
import CheckboxStory from './checkbox';

const stories = {
  InputStory,
  ButtonStory,
  ContainerStory,
  CheckboxStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => {
  story();
});
