import Grid from './src/grid.vue';
import Col from './src/col.vue';

Grid.install = (Vue) => {
  Vue.component(Grid.name, Grid);
};

Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};

export { Grid, Col };
