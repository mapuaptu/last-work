import Button from './src/button.vue';

Button.install = (Vue) => {
  Vue.component('button', Button);
};

export default Button;
