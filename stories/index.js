import InputStory from './input';
import ButtonStory from './button';
import ContainerStory from './container';
import TypographyStory from './typography';

const stories = {
  InputStory,
  ButtonStory,
  ContainerStory,
  ...TypographyStory,
};

Object.values(stories).map((story) => {
  story();
});
