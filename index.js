import Button from './packages/button';

const components = { Button };

const install = (Vue) => {
  for (const key in components) {
    const component = components[key];

    Vue.component(component.name, component);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components,
};
