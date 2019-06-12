import Col from './src/col.vue';

Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};

export default Col;
