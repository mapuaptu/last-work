import Progressbar from './src/progressbar.vue';

Progressbar.install = (Vue) => {
  Vue.component(Progressbar.name, Progressbar);
};

export default Progressbar;
