import { mount } from '@vue/test-utils';
import Block from './block.vue';

describe('Block', () => {
  test('Block is a Vue instance', () => {
    const wrapper = mount(Block);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
