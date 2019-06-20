import Panel from './src/panel.vue';

Panel.install = (Vue) => {
  Vue.component(Panel.name, Panel);
};

export default Panel;
