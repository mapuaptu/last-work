import Menu from './src/menu.vue';

Menu.install = (Vue) => {
  Vue.component(Menu.name, Menu);
};

export default Menu;
