import { mount } from '@vue/test-utils';
import Button from './button.vue';
import Icon from '../../icon';

describe('Button', () => {
  test('Button - exists', () => {
    const wrapper = mount(Button);

    expect(wrapper.exists()).toBeTruthy();
  });

  test('Button - can render icon', () => {
    const wrapper = mount(Button, {
      propsData: {
        icon: 'circle',
      },
      stubs: {
        DdIcon: Icon,
      },
    });

    console.log(wrapper.find({ name: 'DdIcon' }).html());
  });
});
