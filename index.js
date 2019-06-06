import Button from "./packages/button";

const components = { Button };

const install = Vue => {
  for (component of components) {
    Vue.component(component.name, component);
  }
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  ...components
};
