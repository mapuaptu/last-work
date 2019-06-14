import Logo from './src/logo.vue';

Logo.install = (Vue) => {
  Vue.component(Logo.name, Logo);
};

export default Logo;
