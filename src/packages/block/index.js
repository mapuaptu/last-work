import Block from './src/block.vue';

Block.install = (Vue) => {
  Vue.component(Block.name, Block);
};

export default Block;
