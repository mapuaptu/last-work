import Grid from './src/grid.vue';
import Column from './src/column.vue';

Grid.install = (Vue) => {
  Vue.component(Grid.name, Grid);
};

Column.install = (Vue) => {
  Vue.component(Column.name, Column);
};

export { Grid, Column };
