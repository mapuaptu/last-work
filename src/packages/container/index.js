import Container from './src/container.vue';

Container.install = (Vue) => {
  Vue.component(Container.name, Container);
};

export default Container;
