import CardItem from './src/card-item.vue';

CardItem.install = (Vue) => {
  Vue.component(CardItem.name, CardItem);
};

export default CardItem;
