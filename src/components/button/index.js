import UiButton from './src/button.vue';

UiButton.install = (Vue) => {
  Vue.component(UiButton.name, UiButton);
};

export default UiButton;
