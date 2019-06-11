import Button from './packages/button';

const components = {
  Button,
};

// TODO: поправить eslint

const install = (Vue) => {
  for (let key in components) {
    let component = components[key];
    Vue.component(component.name, component);
  }
};

export default install;

export { Button };
