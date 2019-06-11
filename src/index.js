import Button from './components/button';

const components = {
  Button,
};

export default (Vue) => {
  Object.values(components).map((component) => Vue.component(component.name, component));
};

export { Button };
